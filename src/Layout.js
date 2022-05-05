import React from "react";
import { configureStore } from '@reduxjs/toolkit'

const initialState = { value: " " }
function counterReducer(state = initialState, action) 
{
  if (action.type === 'Update') {
    return {
      value: action.payload
    }
  }
  return state
}
const store = configureStore({ reducer: counterReducer })
var val;
function storeval()
{
    val=document.getElementById("input").value;
    store.dispatch({ type: 'Update' ,payload:val})
    const UpdateValue = state => state.value
    const currentValue = UpdateValue(store.getState())
    document.getElementById("header").innerText=currentValue;
    document.getElementById("footer").innerText=currentValue;
}

 function Layout()
{
    return(<><Header/>
            <SideBar/>
            <Content/>
            <Footer/>
            </>
    );
}
function Header()
{
    return(<div id="header"><header className="Main">This is header</header></div>);
}
function SideBar()
{
   return(<div id="Sidebar">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>);
}
function Content()
{
    return(<div id="content" className="Main">
        <label>Enter a text</label>
        <input type="text" id="input" name="textinput"></input>
        <br/>
        <button id="btn" onClick={storeval}>Display</button>
        </div>)
}
function Footer()
{
    return(<div id="footer"><footer className="Main">This is footer</footer></div>)
}
export default Layout;