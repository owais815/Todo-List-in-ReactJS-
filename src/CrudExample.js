import React, { useState } from "react";
import styled from "styled-components";

const CrudExample = () => {
  const [items, setItems] = useState([]);
  const [itemText, setItemText] = useState("");

  const createItem = (itemText) => {
    const newItem = {
      id: Date.now(),
      text: itemText,
    };
    setItems([...items, newItem]);
    setItemText("");
  };

  const updateItem = (id, newText) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <Wrapper>
      <p id="heading">TODO Example</p>
      <div>
        <Field>
          <InputField
            type="text"
            placeholder="Enter an item"
            value={itemText}
            onChange={(e) => setItemText(e.target.value)}
          />
        </Field>

        <Button id="addItemButton" onClick={() => createItem(itemText)}>
          Add Item
        </Button>
      </div>

      <p id="heading">List of Items</p>
      <ItemList>
        {items.map((item) => (
          <Item key={item.id}>
            <p>{item.text}</p>
            <div>
              <Button1
                onClick={() =>
                  updateItem(item.id, prompt("Update the item:", item.text))
                }
              >
                Update
              </Button1>
              <Button2 onClick={() => deleteItem(item.id)}>Delete</Button2>
            </div>
          </Item>
        ))}
      </ItemList>
    </Wrapper>
  );
};

export default CrudExample;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 2em 4em 2em 4em;
  background-color: #171717;
  border-radius: 25px;
  transition: 0.4s ease-in-out;
  margin: 2em auto 2em 16em;
  justify-content: center;
  width: 50%;

  &:hover {
    transform: scale(1.05);
    border: 1px solid black;
  }


  #heading {
    text-align: center;
    margin: 2em;
    color: rgb(255, 255, 255);
    font-size: 1.2em;
  }
`;

const ItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const Field = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 25px;
  padding: 0.6em;
  border: none;
  outline: none;
  color: white;
  background-color: #171717;
  box-shadow: inset 2px 5px 10px rgb(5, 5, 5);
`;

const InputField = styled.input`
  background: none;
  border: none;
  outline: none;
  width: 100%;
  color: #d3d3d3;
`;

const Button = styled.button`
  margin-bottom: 3em;
  margin-left:3em;
  padding: 0.5em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;


  &:hover {
    background-color: red;
    color: white;
  }
`;

const Button1 = styled.button`
  padding: 0.5em;
  padding-left: 1.1em;
  padding-right: 1.1em;
  border-radius: 5px;
  margin-right: 0.5em;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const Button2 = styled.button`
  padding: 0.5em;
  padding-left: 2.3em;
  padding-right: 2.3em;
  border-radius: 5px;
  border: none;
  outline: none;
  transition: 0.4s ease-in-out;
  background-color: #252525;
  color: white;

  &:hover {
    background-color: black;
    color: white;
  }
`;
