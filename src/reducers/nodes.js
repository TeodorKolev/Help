import Node from '../store/node';

export const initialState = Node;

export default function nodeReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_NODES': {
      let nodesData = [];
      if (action.data && typeof action.data === 'object') {
        nodesData = action.data.map(item => ({
          id: item._id,
          title: item.title,
          name: item.name,
          image: item.image,
          description: item.description,
          status: item.status,
          bank: item.bank,
          iban: item.iban,
          bic: item.bic,
          swift: item.swift,
          holder: item.holder,
          refs: item.refs,
        }));
      }
      return {
        ...state,
        error: null,
        loading: false,
        nodes: nodesData,
      };
    }
    case 'NODES_ERROR': {
      return {
        ...state,
        error: action.data,
      };
    }
    default:
      return state;
  }
}
