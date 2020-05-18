import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';
import CustomList from './CustomizeList/CustomList'
import Header from './Header/Header'
import Cart from './Cart/Cart'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
//This feature will stay inside App since Part and Cart need access to the 
//function
//function handles which item is selected
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
    //features is obtaining an array of the keys of features  
    //Then creates a map using the keys from props.features
    const featureHash = feature + '-' + idx;
    //creates a string containing the feature name and index
    //value separated by a hash
      const options = this.props.features[feature].map(item => {
      //Options generates the possible options for the particular
      //feature.  Possibly needs to be stored in PartList
        const itemHash = slugify(JSON.stringify(item));
        //creates a string containing the information for each option
        //inside each feature
        return (
        //generates the html for one part
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
        );
      });

      return (
      //Generates the html for one partlist
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>//
      );
    });

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
    //generates summary of all the parts selected  
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
      //generates individual item on cart summary
      //need to pass:  
          //key=featureHash
          //feature=feature
          //selectedOption=this.state.selected[feature]
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
    //generates the "total" component 

      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <Header header="ELF Computing | Laptops" />
        </header>
        <main>
        {/* generates "Customize Laptop" section */}
        <CustomList 
          features={this.props.features}
          selected={this.state.selected}
          onSelected={this.updateFeature}

        />
        <Cart 
          selected={this.state.selected}
          feature={this.props.features}
          
        />
          {/* <section className="main__summary">
            <h2>Your cart</h2>
            {summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
            </div>
          </section> */}
        </main>
      </div>
    );
  }
}

export default App;
