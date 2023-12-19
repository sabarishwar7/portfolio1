import "./styles/projects.css"
import Card from "./Card"

function projects(){
    return(
        <div>
            <h2>Projects</h2>
            <div className="card-container">
                <span class="material-symbols-outlined">
arrow_back_ios
</span>
            <Card title="LISN"/>
            <Card title="LISN"/>
            <Card title="LISN"/>
                <span class="material-symbols-outlined">
arrow_forward_ios
</span>
            </div>
            
        </div>
        );
    
}
export default projects