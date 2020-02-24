import React from 'react';

import MenuItem from './../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSections } from '../../redux/directory/director.selector';

import './directory.styles.scss';

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSections
});

export default connect(mapStateToProps)(Directory);
