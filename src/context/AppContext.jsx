import { createContext, useState, useEffect } from "react";
import { app } from "../FirebaseConfig";
import { collection, getDocs, getFirestore, query, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const db = getFirestore(app); //intance of firestore database

  //Category List
  const categoryList = [
    "Starters",
    "Stimulating Drinks", 
    "Chaat Stall", 
    "Fruit Stall",
    "Soup Stall",
    "Fresh Juice Stall", 
    "Mocktail Stall", 
    "Main Course",
    "Desserts", 
    "Ice Creams",
    "Evening Snacks Stall", 
    "Indian Breads",
    "South Indian ",
    "Early Morning Coffee",
    "Breakfast",
    "Kalyana Lunch",
    "Counters For Special Occasion",
    "Thamboolam Bags",
  ]

  //states
  const [loading, setLoading] = useState(false);
  const [itemData, setItemData] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  //Get Data from firebase
  const getData = async () => {
    setLoading(true);
    const docSnap = await getDocs(collection(db, "Items"));
    const data = docSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setItemData(data);
    setLoading(false);
  };

  // Delete oder Function
    const deleteOrder = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(db, 'order', id))
            toast.success('Order Deleted successfully')
            getAllOrderFunction();
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

  // user State 
  const [getAllUser, setGetAllUser] = useState([]);

  //Get all user function
  const getAllUserFunction = async () => {
    setLoading(true);
    try {
        const q = query(
            collection(db, "user"),
            orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
            let userArray = [];
            QuerySnapshot.forEach((doc) => {
                userArray.push({ ...doc.data(), id: doc.id });
            });
            setGetAllUser(userArray);
            setLoading(false);
        });
        return () => data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

  // Order State 
  const [getAllOrder, setGetAllOrder] = useState([]);

  //get all Order function
  const getAllOrderFunction = async () => {
    setLoading(true);
    try {
        const q = query(collection(db, "order"),orderBy('time'));
        const data = onSnapshot(q, (QuerySnapshot) => {
            let orderArray = [];
            QuerySnapshot.forEach((doc) => {
                orderArray.push({ ...doc.data(), id: doc.id });
            });
            setGetAllOrder(orderArray);
            setLoading(false);
        });
        return () => data;
    } catch (error) {
        console.log(error);
        setLoading(false);
    }
}

  useEffect(() => {
    getAllOrderFunction();
    getAllUserFunction();
  }, []);

  //values to be passed//
  const value = {
    loading,
    setLoading,
    itemData,
    setItemData,
    getData,
    categoryList,
    getAllOrder,
    deleteOrder,
    getAllUser,
    showPassword,
    setShowPassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
