import React, { useState } from 'react';
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import './Dropbox.css';
const DropBox = ({ options }) => {
  const [, setShowData] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log('options ', options);
  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === '*')) {
      return `${placeholderButtonLabel}: All`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChange(value, event) {
    if (event.action === 'select-option' && event.option.value === '*') {
      setSelectedOptions(this.options);
      console.log('this.options ', this.options);
    } else if (
      event.action === 'deselect-option' &&
      event.option.value === '*'
    ) {
      setSelectedOptions([]);
    } else if (event.action === 'deselect-option') {
      setSelectedOptions(value.filter((o) => o.value !== '*'));
    } else if (value.length === this.options.length - 1) {
      setSelectedOptions(this.options);
    } else {
      setSelectedOptions(value);
    }
  }

  return (
    <>
      <div className="dropbox__container">
        <ReactMultiSelectCheckboxes
          options={[{ label: 'All', value: '*' }, ...options]}
          placeholderButtonLabel="Colors"
          getDropdownButtonLabel={getDropdownButtonLabel}
          value={selectedOptions}
          onChange={onChange}
          setState={setSelectedOptions}
        />
        <button
          onClick={() => {
            setSelectedOptions([]);
            setShowData([]);
          }}
          style={{
            marginLeft: 5,
            marginTop: 10,
            background: '#bdbdbd',
            cursor: 'pointer',
            color: '#fff',
            outline: 'none',
            border: 'none',
            padding: '5px 10px',
            borderRadius: 15,
          }}
        >
          Clear
        </button>
        <button
          onClick={() => {
            setShowData(selectedOptions);
            alert(
              JSON.stringify(selectedOptions).length === 2
                ? 'No data found'
                : JSON.stringify(selectedOptions)
            );
          }}
          style={{
            marginLeft: 5,
            marginTop: 10,
            cursor: 'pointer',
            background: 'blue',
            color: '#fff',
            outline: 'none',
            border: 'none',
            padding: '5px 10px',
            borderRadius: 15,
          }}
        >
          Submit
        </button>

        {/* {selectedOptions.length > 0 &&
          showData?.length > 0 &&
        //   alert(
        //     JSON.stringify(selectedOptions)
        //   )
          //   </div>)
          //   <div
          //     style={{
          //       marginTop: 20,
          //       padding: 20,
          //       boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          //     }}
          //   >
          //     {JSON.stringify(selectedOptions)}
          //   </div>
        } */}
      </div>
    </>
  );
};

export default DropBox;
