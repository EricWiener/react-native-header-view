import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./GorgeousHeader.style";

const menuImg = require("../../../local-assets/menu.png");
const searchImage = require("../../../local-assets/search.png");

class GorgeousHeader extends Component {
  renderTopBar = () => {
    const {
      menuIcon,
      menuImageStyle,
      menuImageSource,
      menuImageOnPress,
      profileImageStyle,
      profileImageSource,
      profileImageOnPress,
    } = this.props;
    return (
      <View style={styles.topBarContainer}>
        <TouchableOpacity style={styles.floatLeft} onPress={menuImageOnPress}>
          {
            menuIcon ? menuIcon : <Image
                source={menuImageSource || menuImg}
                style={menuImageStyle || styles.menuImageStyle}
            />
          }
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.floatRight}
          onPress={profileImageOnPress}
        >
          <Image
            source={profileImageSource}
            style={profileImageStyle || styles.profileImageStyle}
          />
        </TouchableOpacity>
      </View>
    );
  };

  renderContent = () => {
    const {
      title,
      subtitle,
      searchIcon,
      titleTextStyle,
      searchBarStyle,
      searchInputStyle,
      searchPlaceHolderColor,
      subtitleTextStyle,
    } = this.props;
    return (
      <View style={styles.contentContainer}>
        <Text style={[styles.titleTextStyle, titleTextStyle]}>{title}</Text>
        <Text style={[styles.subtitleTextStyle, subtitleTextStyle]}>
          {subtitle}
        </Text>
        <View style={[styles.searchBarStyle, searchBarStyle]}>
          <Image
            style={styles.searchImageStyle}
            source={searchIcon || searchImage}
          />
          <TextInput
            style={[styles.searchInputStyle, searchInputStyle]}
            placeholder="Search something"
            placeholderTextColor={searchPlaceHolderColor || '#000'}
            {...this.props}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTopBar()}
        {this.renderContent()}
      </View>
    );
  }
}

GorgeousHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

GorgeousHeader.defaultProps = {
  title: "Order",
  subtitle: "Healthy food can keep you fit.",
};

export default GorgeousHeader;
