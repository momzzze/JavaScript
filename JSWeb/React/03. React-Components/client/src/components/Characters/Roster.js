import React,{Component} from 'react';

 class Roster extends Component {
   
    render(){
        const images=this.props.images.map(i=>(
            <div key={i.id} className="image-container">    
                <img src={i.url} alt="ssssas" onClick={()=>this.props.select(i.id)}/>
            </div>
        ));

        return (
            <section id="roster">
                {images}
            </section>
        )
    }
}


export default Roster