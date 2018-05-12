import * as actions from "./actions";
import * as ActionTypes from "./action-types";

describe("Actions Test suite", () => {
    it("should be empty action", () => {
       expect(actions.empty())
                .toEqual({type: ActionTypes.EMPTY_CART})   
    })

    it("should be add item ", () => {
        expect(actions.addItem({id: 1, price: 100}))
                        .toEqual({type: ActionTypes.ADD_ITEM_TO_CART,
                                  payload: {item: {id: 1, price: 100}} }) 
    })
})