import React from "react";

import {mount} from "enzyme";
import About from "./About";

describe("About component Suite", ()=> {
    
    it("about default test", ()=> {
        let wrapper = mount(<About  />);
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(2);
    })
 
    it("about show/hide test", ()=> {
        let wrapper = mount(<About  />);
        let component = wrapper.instance();

        //make sure it is visible
        expect(component.state.show).toBe(true);

        //toggle first time
        component.toggle();
        wrapper.update();

        //make sure that no ul or li element present
        expect(component.state.show).toBe(false);
        
        expect(wrapper.find("ul").length).toBe(0);
        expect(wrapper.find("li").length).toBe(0);

        console.log(wrapper.find("div").html());
    })

    

})