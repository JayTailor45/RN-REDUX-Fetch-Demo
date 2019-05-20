import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import {fetchPeopleFromAPI} from './actions'

const app = (props) => {
  const {container, text, button, buttonText, singlePerson} = styles;
  const {people, isFetching} = props.people;

  return (
      <View style={container}>
        <Text style={text}>Redux app</Text>
        <TouchableHighlight onPress={() => props.getPeople()} style={button}>
          <Text style={buttonText}>Fetch Data</Text>
        </TouchableHighlight>
        {
          isFetching && <ActivityIndicator size='large' animating={true} style={{alignSelf: 'center', marginTop: 16}}/>
        }
        {
          people.length ? (
              people.map((person, index) => {
                    return (
                        <View key={index}
                              style={singlePerson}
                        >
                          <Text>
                            Name : {person.name}
                          </Text>
                          <Text>
                            Gender : {person.gender}
                          </Text>
                        </View>
                    )
                  }
              )
          ) : null
        }
      </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  text: {
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 16
  },
  button: {
    backgroundColor: '#222',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#b2b2b2'
  },
  singlePerson: {
    marginTop: 5,
    height: 50,
    borderColor: '#5e5e5e',
    borderRadius: 3,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function mapStateToProps(state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPeople: () => dispatch(fetchPeopleFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(app)