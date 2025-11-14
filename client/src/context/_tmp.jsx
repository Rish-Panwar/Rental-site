import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY;

  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [cars, setCars] = useState([]);
  const [carsLoading, setCarsLoading] = useState(true);

  // axios response interceptor to handle 401 globally
  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (resp) => resp,
      (error) => {
        const status = error?.response?.status;
        if (status === 401) {
          // Clear client-side auth state
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
          setToken(null);
          setUser(null);
          setIsOwner(false);
          toast.error("Session expired. Please login again.");
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [navigate]);

  // Fetch logged-in user data (protected)
  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user/data");
      if (data.success) {
        setUser(data.user);
        setIsOwner(data.user.role === "owner");
      } else {
        setUser(null);
        setIsOwner(false);
        navigate("/");
      }
    } catch (error) {
      // keep lightweight errors here — interceptor handles 401
      console.error("fetchUser error:", error.response?.data || error.message);
    }
  };

  // Fetch cars for authenticated user (protected)
  const fetchCars = async () => {
    setCarsLoading(true);
    try {
      const { data } = await axios.get("/api/user/cars");
      if (data?.success) {
        setCars(data.cars || []);
      } else {
        toast.error(data?.message || "Failed to fetch cars");
      }
    } catch (error) {
      console.error("fetchCars (protected) error:", error.response?.data || error.message);
      // do not toast here to avoid duplicate messages from interceptor
    } finally {
      setCarsLoading(false);
    }
  };

  // Public cars endpoint for guests (no auth required)
  const fetchPublicCars = async () => {
    setCarsLoading(true);
    try {
      // adjust this path to match your backend public route
      const { data } = await axios.get("/api/public/cars");
      if (data?.success) {
        setCars(data.cars || []);
      } else {
        setCars([]); // empty fallback
        console.warn("fetchPublicCars:", data?.message);
      }
    } catch (error) {
      console.error("fetchPublicCars error:", error.response?.data || error.message);
      setCars([]); // empty fallback
    } finally {
      setCarsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setIsOwner(false);
    setCars([]);
    delete axios.defaults.headers.common["Authorization"];
    toast.success("You have been logged out");
    navigate("/");
  };

  // Load token from localStorage on first mount (do NOT call protected endpoints here)
  // We only set token and axios header here; the [token] effect will fetch.
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }
  }, []);

  // Whenever token changes -> set header and fetch protected resources.
  // If there is no token, fetch public cars.
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      // fetch protected data
      (async () => {
        await Promise.all([fetchUser(), fetchCars()]);
      })();
    } else {
      // no token: clear user and fetch public cars
      setUser(null);
      setIsOwner(false);
      fetchPublicCars();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const value = {
    navigate,
    currency,
    axios,
    user,
    setUser,
    token,
    setToken,
    isOwner,
    setIsOwner,
    fetchUser,
    showLogin,
    setShowLogin,
    logout,
    fetchCars,
    cars,
    setCars,
    carsLoading,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
