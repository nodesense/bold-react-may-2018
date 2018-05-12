import {mapStateToProps,
        mapDispatchToProps} from "./Cart";

describe("test mapToState suite", () => {
    it("test ", () => {
        
    let state = {
        items: [{id: 1}]
    }
    expect(mapStateToProps(state))
        .toEqual({
            cartLength: 1
        })
    })

    it("test add Item", () => {
        let dispatch = jest.fn(); //mock
        let props = mapDispatchToProps(dispatch);

        props.addItem();
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toBeCalledWith({
            type: 'CART.ADD_ITEM_TO_CART',
            payload: {
                item: {
                    id: 100,
                    name: 'Product 100',
                    price: 100,
                    qty: 1
                }
            }
        })

    })

})