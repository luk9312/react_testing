import React from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import { store } from './index';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       items: []
//     }
//   }
//   filter(e) {
//     this.setState({filter: e.target.value})
//   }
//   componentWillMount(){
//     fetch('https://swapi.co/api/people/?format=json')
//       .then(response => response.json())
//       .then(({results: items}) => this.setState({items}))
//   }
//   render(){
//     let items = this.state.items
//     if (this.state.filter) {
//       items = items.filter(item =>
//       item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//         <input 
//           type="text"
//           onChange={this.filter.bind(this)}/>
//         {
//           items.map(item => 
//             <Person key={item.name} person={item}/>)
//         }
//       </div>
//     )
//   }
// }

// const Person = (props) => <h4>{props.person.name}</h4>

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       items: ['testing']
//     }
//     this.add = this.add.bind(this)
//     this.delete = this.delete.bind(this)
//   }
//   add(input){
//     this.setState({
//       items: [...this.state.items,input]
//     })
//   }
//   delete(e){
//     this.setState({
//       items: [...this.state.items,ReactDOM.findDOMNode(this.inp).value]
//     })
//   }
//   render(){
//     let items = this.state.items;
//     return (
//       <div>
//         <ControlPanel 
//           ref={component => this.input=component}
//           add={this.add}
//         />
//         <ol>
//           {
//             items.map((item, index) => 
//               <List key={index + 1} item={item} />)
//           }
//         </ol>
//       </div>
//     )
//   }
// }

// class ControlPanel extends React.Component {

//   handleAdd = () => {
//     const input = this.inp.value;
//     this.props.add(input);            
//   }
//   render(){
//     return (
//       <div>
//         <input 
//           ref={(ref) => this.inp = ref}
//           type = "text"
//           defaultValue = ""
//         />
//         <button onClick={this.handleAdd}>
//           Add item
//         </button>
//       </div>
//     )
//   }
// }

// const List = (props) => <li>{props.item}</li>





class App extends React.Component {
  render(){
    return (
      <div>
        <Counter 
          value={store.getState()}
          onIncrement={() => store.dispatch({
                        type:'INCREMENT'
                      })}
          onDecrement={() => store.dispatch({
                        type:'DECREMENT'
                      })}
        />
      </div>
    )
  }
}

const Counter = (props) => (
  <div>
    <h1>{props.value}</h1>
    <button onClick={props.onIncrement}>+</button>
    <button onClick={props.onDecrement}>-</button>
  </div>
)



export default App;