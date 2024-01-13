

function EduCard(props){
    return(
        <div>
             <div className="tag">
            <div className="std-img"> 
            {/*it is Image og the grade*/}

            <p>{props.img} </p>
            </div>
            <div className="std">
                {/*it shows grade*/}

                <p>{props.std} {props.year}</p>


            </div>
            <div className="std-des">
                {/*it is mark obtained*/}
                <p>{props.des}</p>
                <p>{props.mark}</p>

            </div>
        </div>
        </div>
    );

}

export default EduCard