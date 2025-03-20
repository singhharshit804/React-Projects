import React from 'react'
import CurrencySelector from './components/CurrencySelector'

import { useState, useEffect } from "react";
import axios from 'axios';




function App() {

  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  //amount store karne k liye 
  const [amount, setAmount] = useState("");

  //Result amount ko show karna, dynamically h1,h2,h3 ko update karke
  const [convertedAmount, setConvertedAmount] = useState(null);

  // API Call
  const [CurrencyList, setCurrencyList] = useState({});

  const [exchangeRates, setExchangeRates] = useState({}); // ✅ Yeh missing tha



  useEffect(() => {
    const fetchCurrencyNames = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        
        // API se currency names extract karna
        const currencyData = {};
        response.data.forEach((country) => {
          if (country.currencies) {
            Object.keys(country.currencies).forEach((code) => {
              currencyData[code] = `${code} - ${country.currencies[code].name}`;
            });
          }
        });
  
        console.log("Fetched Currency Names:", currencyData); // Debugging ke liye
        setCurrencyList(currencyData); // ✅ State me store karna
      } catch (error) {
        console.error("Error fetching currency names:", error);
      }
    };
  
    fetchCurrencyNames();
  }, []);
  

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };
  
    fetchExchangeRates();
  }, [fromCurrency]); // ✅ Jab bhi fromCurrency change hoga, API call hogi
  

      

  //Amount convert karna
  useEffect(() => {
    if (amount && exchangeRates[toCurrency]) { // API data load hone ke baad conversion karein
      const result = amount * exchangeRates[toCurrency]; // Actual conversion
      setConvertedAmount(result.toFixed(2));
    }
     }, [amount, fromCurrency, toCurrency, exchangeRates]); // Jab bhi koi change ho, useEffect chalega
  


     const fullCurrencyName = CurrencyList[toCurrency]?.split(" - ")[1] || toCurrency;
     const fullFromCurrencyName = CurrencyList[fromCurrency]?.split(" - ")[1] || fromCurrency;
     const conversionRate = exchangeRates[toCurrency] || "N/A"; 


     //Swap karne k liye function
     const swapCurrencies = () => {
      setFromCurrency(toCurrency);
      setToCurrency(fromCurrency);
    };
    





  return (
    <div className='w-full h-screen p-24 bg-gradient-to-br from-[#CFEB9E] to-green-900'>
      <h1 className='font-bold text-4xl text-[#0b491cda] mb-9 shadow-2xl'>Currency converter</h1>

      <div className='py-10 px-16 rounded-2xl bg-[#335847] shadow-2xl'>
        <h3 className='font-bold text-[#b6dac0b7] text-xl mb-5 '>Amount</h3>
        

        {/* Input + Select + Button Div */}
        <div className='py-12 px-6 rounded-xl bg-gradient-to-br from-[#CFEB9E] to-green-900 flex items-center gap-8 md:gap-5 w-full justify-between'>
          <input className='flex-1 py-3 px-4 w-1/3 md:w-1/4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition shadow-xl'
            type="number"
            placeholder='Enter Amount'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          
          <CurrencySelector
              selectedCurrency= {fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              currencyList={CurrencyList}
          />


          <button onClick={swapCurrencies} className=' py-3 px-5 bg-[#335847] text-white rounded-lg text-xl flex items-center justify-center shadow-2xl '>
            <i className="ri-arrow-left-right-line"></i>
          </button>

          <CurrencySelector
            selectedCurrency= {toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            currencyList={CurrencyList}
          />

        </div>

        {/* Conversion Result */}
        {convertedAmount !== null && (
          <div className='mt-10'>
          <h2 className='font-bold text-[#b6dac0b7] text-xl'>{amount} {fullFromCurrencyName} = </h2>
          <h1 className='text-6xl text-white mt-2 shadow-md'>{convertedAmount} {fullCurrencyName}</h1>
          <h3 className='font-bold text-[#b6dac0b7] text-xl mt-5 '>1 {fullFromCurrencyName} = {conversionRate} {fullCurrencyName}</h3>
        </div>
        )}
      </div>
    </div>


  )
}

export default App
