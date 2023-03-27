import FormAdd from "../formAdd/FormAdd";
import ListTovars from "../listTovars/ListTovars";
import "./main.css";

const Main = (props) => {
    let selectedMenu = props.selectedMenu; 

    let componentToDisplay;

    switch(selectedMenu){
        
        case "Tovar List":
            componentToDisplay = <ListTovars /> 
            break;
        case "Add Tovars":
            componentToDisplay = <div className="form_add"><FormAdd /> 
                      <div className="form_add"><ListTovars /></div>
            </div>  
            break;
        default:
            componentToDisplay = null;
    }
    return <div className="main_info">{componentToDisplay}</div>
}
export default Main;