import React from "react";
import ReactDOM from "react-dom";

interface Props {
    
}
  
interface State {
    isOpen: boolean
}


class ButtonToggle extends React.Component<Props, State> {
    state: State = {
        // optional second annotation for better type inference
        isOpen: true
      };

    constructor(props: any) {
        super(props);
    
        this.state = {
            isOpen : true
        };
    }

    toggleOpen = () => {
        // this.setState(prevState => ({
        //     isToggleOn: !prevState.isToggleOn
        // }));
        console.log('toggleOpen')
        const t = document.getElementById("root");
        t!.classList.toggle("translate-x-full");

        this.setState({ isOpen : !this.state.isOpen })
        console.log(this.state.isOpen)
        //this.state.isOpen = !this.state.isOpen;
    }

    render() {
        return(
            <button
                onClick={this.toggleOpen}
                className="absolute right-0 text-white bg-blue-500 rounded-full focus:outline-none" 
                style={{
                    top: "50%",
                    left: 0,
                    zIndex: 999999,
                    transform: "translateX(-16px)",
                    right: "auto"
                }}>
                <svg className={"w-8 h-8 fill-current transform transition-transform duration-200" + (this.state.isOpen ? " rotate-180" : " rotate-0")} viewBox="0 0 24 24">
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                </svg>
            </button>
        )
    }
}
  
  export default ButtonToggle;