import React,{Component} from 'react';
import '../../node_modules/bootstrap-slider/dist/css/bootstrap-slider.min.css';
import ReactBootstrapSlider from 'react-bootstrap-slider';
export default class Equalizer extends Component{
   constructor(props){
      super(props);
      this.state = {value:0,step:1,max:12,min:-12};
	  this.changeValue = this.changeValue.bind(this);
   }
   changeValue(){

   }
   render(){
   	 return(
   	 	<div className="parent-div">
   	 	    <div className="slider-div">
   	 	        <div className="child-slider-div"> 
		            <ReactBootstrapSlider
					    value={this.state.value}
					    change={this.changeValue}
					    slideStop={this.changeValue}
					    max={this.state.max}
					    min={this.state.min}
					    orientation="vertical"
					    reversed={true}
					    disabled="enabled" />
					<div className="value-slider">60k</div>    
			    </div>
			    <div className="child-slider-div"> 
		            <ReactBootstrapSlider
					    value={this.state.value}
					    change={this.changeValue}
					    slideStop={this.changeValue}
					    max={this.state.max}
					    min={this.state.min}
					    orientation="vertical"
					    reversed={true}
					    disabled="enabled" />
					<div className="value-slider">310k</div>    
				</div>
			    <div className="child-slider-div"> 
		            <ReactBootstrapSlider
					    value={this.state.value}
					    change={this.changeValue}
					    slideStop={this.changeValue}
					    max={this.state.max}
					    min={this.state.min}
					    orientation="vertical"
					    reversed={true}
					    disabled="enabled" />
					<div className="value-slider">1k</div>    
				</div>
				<div className="child-slider-div"> 
		            <ReactBootstrapSlider
					    value={this.state.value}
					    change={this.changeValue}
					    slideStop={this.changeValue}
					    max={this.state.max}
					    min={this.state.min}
					    orientation="vertical"
					    reversed={true}
					    disabled="enabled" />
					<div className="value-slider">6k</div>    
				</div>
				<div className="child-slider-div"> 
		            <ReactBootstrapSlider
					    value={this.state.value}
					    change={this.changeValue}
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