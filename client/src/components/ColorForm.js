import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const initialColor = {
    color: '',
    code: {hex:''}
};

const ColorForm = ({updateColors}) => {
    const [colorToAdd, setColorToAdd] = useState(initialColor);

    const saveAdd = e  => {
        e.preventDefault();
        axiosWithAuth()
        .post('/colors', colorToAdd)
        .then(res=>{
            updateColors();
            setColorToAdd(initialColor);
        })
        .catch(err=>console.log("error: ", err));
    };

return(
    <form onSubmit={saveAdd}>
          <legend>Add Color</legend>
          <label>
            Color:
            <input
              onChange={e =>
                setColorToAdd({ ...colorToAdd, color: e.target.value })
              }
              value={colorToAdd.color}
            />
          </label>
          <label>
            Hex Code:
            <input
              onChange={e =>
                setColorToAdd({
                  ...colorToAdd,
                  code: { hex: e.target.value }
                })
              }
              value={colorToAdd.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">Add</button>
          </div>
        </form>
    );
};

export default ColorForm;