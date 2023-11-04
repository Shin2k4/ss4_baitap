
import './App.css'
import DoList from './compoments/FormStudents/DoList'

// import Count_text from './compoments/Reacts/React project/Count_text'

// import DoList from './compoments/forms/DoList'

// import Counter from "./compoments/Reacts/React_projec"

// import OrderForm from "./compoments/Reacts/Form_handling_withFunction/React-project"

// import ProductList from './compoments/Reacts/React project/ProductList'

// import TaskList from './compoments/Reacts/React project/TaskList'

// import SearchAndFilter from './compoments/Reacts/React project/SearchAndFilter'

// import Form from './compoments/Reacts/React project/Form'

// import TemperatureConverter from'./compoments/Reacts/React project/TemperatureConverter'

// import ShippingCalculator from'./compoments/Reacts/React project/ShippingCalculator'

// import Count_click from './compoments/Reacts/React project/Count_click'
function App() {
  // let users = [
  //   {
  //     id: Date.now() * Math.random(),
  //     title: 'Software engineer',
  //     time: '	2222-12-04',
  //     status: true
  //   },
  //   {
  //     id: Date.now() * Math.random(),
  //     title: 'Software engineer',
  //     time: '2522-12-04',
  //     status: false
  //   },
  // ]
  let userLists = [
    {
      id: Date.now()*Math.random(),
      code: "td0134",
      name: "Nguyen Van A",
      age: 20,
      sex: "nam" ? "nam" : "nữ",
    },
    {
      id: Date.now() * Math.random(),
      code: "td0134",
      name: "Nguyen Van A",
      age: 20,
      sex: "nam" ? "nam" : "nữ",
    },
  ]
  return (
    <>
      {/* <DoList users = {users}/> */}

      {/* <OrderForm/> */}

      {/* <Counter/> */}

      {/* <ProductList/> */}

      {/* <TaskList/> */}

      {/* <SearchAndFilter/> */}

      {/* <Form/> */}

      {/* <TemperatureConverter/> */}

      {/* <ShippingCalculator/> */}

      {/* <Count_click/> */}

      {/* <Count_text/> */}

      <DoList userLists={userLists}/>

    </>
  )
}

export default App
