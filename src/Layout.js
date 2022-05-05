import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from "react-redux";

 function Layout()
{
    return(<Provider store={store} ><Header/>
            <SideBar/>
            <Content/>
            <Footer/>
            </Provider>
    );
}
function Header()
{
    return(<div id="header"><header className="Main">This is header</header></div>);
}
function SideBar()
{
   return(<div id="Sidebar">
       <label>The items you enter will display here:</label>
        <ul id="list">
            
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

const initialState = { value: " " }
function ValueReducer(state = initialState, action) 
{
  if (action.type === 'Update') {
    return {
      value: action.payload
    }
  }
  return state
}
const store = configureStore({ reducer: ValueReducer })
var val;

function storeval()
{
    val=document.getElementById("input").value;
    store.dispatch({ type: 'Update' ,payload:val})
    currenval();
}
function currenval()
{
    const UpdateValue = state => state.value
    const currentValue = UpdateValue(store.getState())
    document.getElementById("header").innerText=currentValue;
    document.getElementById("footer").innerText=currentValue;
    const node = document.createElement("li");
    const textnode = document.createTextNode(currentValue);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}
export default Layout;