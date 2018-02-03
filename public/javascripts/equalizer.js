import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../../node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css';
import ReactBootstrapSlider from 'react-bootstrap-slider';
export default class Equalizer extends Component{
   constructor(props){
      super(props);
      this.state = {value1:0,value2:0,value3:0,value4:0,value5:0,step:1,max:12,min:-12};
	  this.changeValue = this.changeValue.bind(this);
   }
   changeValue(obj,id){
   	 let el = ReactDOM.findDOMNode(this);
   	 this.removeClass(el.querySelector('#'+id).querySelector('.slider-track-high'));
   	 if(obj.target.value >= -12 && obj.target.value <= -4){
   	 	el.querySelector('#'+id).querySelector('.slider-track-high').classList.add("red-color");
   	 }
   	 if(obj.target.value > -4 && obj.target.value <= 4){
   	 	el.querySelector('#'+id).querySelector('.slider-track-high').classList.add("yellow-color");
   	 }
   	 if(obj.target.value > 4 && obj.target.value <= 12){
   	 	el.querySelector('#'+id).querySelector('.slider-track-high').classList.add("green-color");
   	 }
   }
   setSliderValue(type){
   	 let el = ReactDOM.findDOMNode(this);
   	 this.removeClass(el.querySelector('#id1').querySelector('.slider-track-high'));
   	 this.removeClass(el.querySelector('#id2').querySelector('.slider-track-high'));
   	 this.removeClass(el.querySelector('#id3').querySelector('.slider-track-high'));
   	 this.removeClass(el.querySelector('#id4').querySelector('.slider-track-high'));
   	 this.removeClass(el.querySelector('#id5').querySelector('.slider-track-high'));
   	switch(type){
   		case "Rock":
   		  el.querySelector('#id1').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id2').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id3').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id4').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id5').querySelector('.slider-track-high').classList.add("yellow-color");
   		  this.setState({value1:0,value2:5,value3:5,value4:1,value5:-1});
   		  break;
   		case "Pop":
   		  el.querySelector('#id1').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id2').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id3').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id4').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id5').querySelector('.slider-track-high').classList.add("yellow-color");
   		  this.setState({value1:0,value2:-2,value3:-3,value4:-2,value5:0});
   		  break;  
   		case "Jazz":
   		  el.querySelector('#id1').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id2').querySelector('.slider-track-high').classList.add("red-color");
	      el.querySelector('#id3').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id4').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id5').querySelector('.slider-track-high').classList.add("red-color");
   		  this.setState({value1:10,value2:-8,value3:5,value4:7,value5:-9});
   		  break;
   		case "Classical":
   		  el.querySelector('#id1').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id2').querySelector('.slider-track-high').classList.add("green-color");
	      el.querySelector('#id3').querySelector('.slider-track-high').classList.add("yellow-color");
	      el.querySelector('#id4').querySelector('.slider-track-high').classList.add("red-color");
	      el.querySelector('#id5').querySelector('.slider-track-high').classList.add("red-color");
   		  this.setState({value1:5,value2:5,value3:0,value4:-5,value5:-5});
   		  break;     
   	}   
   }
   removeClass(obj){
        obj.classList.remove("red-color");
	    obj.classList.remove("green-color");
	    obj.classList.remove("yellow-color");
   }
   componentDidMount(){
   	    let el = ReactDOM.findDOMNode(this);
    	el.querySelector('#id1').querySelector('.slider-track-high').classList.add("yellow-color");
	    el.querySelector('#id2').querySelector('.slider-track-high').classList.add("yellow-color");
	    el.querySelector('#id3').querySelector('.slider-track-high').classList.add("yellow-color");
	    el.querySelector('#id4').querySelector('.slider-track-high').classList.add("yellow-color");
	    el.querySelector('#id5').querySelector('.slider-track-high').classList.add("yellow-color");
   }
   render(){
   	 return(
   	 	
		<div className="parent-div">
			<div className="lable-div">
				<div> -12 db </div>
				<div> 0 </div>
				<div> +12 db </div>
			</div>
			<div className="dropdown dropdown-post">
				<button className="dropbtn">Preset</button>
				<div className="dropdown-content">
					<div onClick={()=>{this.setSliderValue("Rock")}}>Rock</div>
					<div onClick={()=>{this.setSliderValue("Pop")}}>Pop</div>
					<div onClick={()=>{this.setSliderValue("Jazz")}}>Jazz</div>
					<div onClick={()=>{this.setSliderValue("Classical")}}>Classical</div>
				</div>
			</div>
			<div className="slider-div">
				<div className="child-slider-div">
					<ReactBootstrapSlider id="id1"
							    value={this.state.value1}
							    change={(e)=>{this.changeValue(e,"id1")}}
							    slideStop={this.changeValue}
							    max={this.state.max}
							    min={this.state.min}
							    orientation="vertical"
							    reversed={true}
							    disabled="enabled" />
					<div className="value-slider">60k</div>
				</div>
				<div className="child-slider-div">
					<ReactBootstrapSlider id="id2"
							    value={this.state.value2}
							    change={(e)=>{this.changeValue(e,"id2")}}
							    slideStop={this.changeValue}
							    max={this.state.max}
							    min={this.state.min}
							    orientation="vertical"
							    reversed={true}
							    disabled="enabled" />
					<div className="value-slider">310k</div>
				</div>
				<div className="child-slider-div">
					<ReactBootstrapSlider id="id3"
							    value={this.state.value3}
							    change={(e)=>{this.changeValue(e,"id3")}}
							    slideStop={this.changeValue}
							    max={this.state.max}
							    min={this.state.min}
							    orientation="vertical"
							    reversed={true}
							    disabled="enabled" />
					<div className="value-slider">1k</div>
				</div>
				<div className="child-slider-div">
					<ReactBootstrapSlider id="id4"
							    value={this.state.value4}
							    change={(e)=>{this.changeValue(e,"id4")}}
							    slideStop={this.changeValue}
							    max={this.state.max}
							    min={this.state.min}
							    orientation="vertical"
							    reversed={true}
							    disabled="enabled" />
					<div className="value-slider">6k</div>
				</div>
				<div className="child-slider-div">
					<ReactBootstrapSlider id="id5"
							    value={this.state.value5}
							    change={(e)=>{this.changeValue(e,"id5")}}
							    slideStop={this.changeValue}
							    max={this.state.max}
							    min={this.state.min}
							    orientation="vertical"
							    reversed={true}
							    disabled="enabled" />
					<div className="value-slider">16k</div>
				</div>
			</div>
		</div>
   	 )
   }
}