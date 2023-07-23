export interface singleProduct {
    id: number,
    name: string,
    price: string,
    cartImage: string,
    description: string,
    rating: number,
    brand:string
    
    
  }

  
  export interface product {
    products: singleProduct[];
    isLoading: boolean;
    isError: boolean;
  }
  
  // Define the action interface with specific action types
  export interface act {
    type: "REQUEST" | "GET_SUCCESS" | "FAILED";
    payload?: singleProduct[]; // Adjust this to match the payload type of each action
  }
  
  // reducer
  const initialState: product = {
    products: [],
    isLoading: true, // Set this to true initially to reflect loading state
    isError: false,
  };
  
  export const reducer = (state = initialState, action: act): product => {
    switch (action.type) {
      case "REQUEST": {
        return {
          ...state,
          isLoading: true,
        };
      }
      case "GET_SUCCESS": {
        return {
          ...state,
          isLoading: false,
          products: action.payload || [], // Make sure to handle the payload correctly
        };
      }
      case "FAILED": {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      default: {
        return state;
      }
    }
  };