import React, { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { app } from "../FirebaseConfig";
import { AppContext } from "../context/AppContext";

const Contact = () => {
  const db = getFirestore(app); //instance of firestore database

  const { loading, setLoading } = useContext(AppContext);

  const [query, setQuery] = useState({email:"", subject:"", message:""});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(query.email == "" || query.subject == "" || query.message == ""){
        return toast.error("Please Fill all the fields !");
      }
      setLoading(true);
      const docRef = await addDoc(collection(db, "Queries"),{
        email:query.email,
        subject:query.subject,
        message:query.message,
      })
      setLoading(false);
      toast.success("Your message send successfully");
      e.target.reset();
      
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <>
      <section className="flex-col text-center my-24 items-center justify-center max-w-[1728px] w-10/12 mx-auto bg-white">
        <div class="px-4 mx-auto max-w-screen-md">
          <div className="uppercase">Contact us</div>
          <h1 className="text-5xl md:text-6xl lg:text-6xl mx-auto font-bold">
            Get in <span className="text-green-700">Touch</span>
          </h1>
          <form onSubmit={handleSubmit} class="space-y-8 mt-10 text-start">
            <div>
              <label htmlFor="email" class="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                onChange={(e)=>setQuery({...query, email: e.target.value})}
                type="email"
                id="email"
                class="border-2 text-gray-900 text-sm border-gray-400 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="name@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="subject" class="block mb-2 text-sm font-medium =">
                Subject
              </label>
              <input
                onChange={(e)=>setQuery({...query, subject:e.target.value})}
                type="text"
                id="subject"
                class="border-2 text-gray-900 text-sm border-gray-400 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Let us know how we can help you"
              />
            </div>
            <div class="sm:col-span-2">
              <label htmlFor="message" class="block mb-2 text-sm font-medium ">
                Your message
              </label>
              <textarea
                onChange={(e)=>setQuery({...query, message:e.target.value})}
                id="message"
                rows="6"
                class="border-2 text-gray-900 text-sm border-gray-400 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Leave a Message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-3 flex items-center gap-2 mt-10 bg-green-700 hover:bg-green-800 text-white rounded-sm"
            >
              Send message
            </button>
            
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
