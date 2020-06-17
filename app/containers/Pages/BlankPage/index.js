import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import { firestoreConnect, withFirebase } from 'react-redux-firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from 'dan-components/Loading';
import { compose } from 'redux';
import { COLLECTIONS } from '../../../config/dbConstants';
function BlankPage(props) {
  const title = brand.name + ' - Blank Page';
  const description = brand.desc;
  const {
    patients
  } = props;
  console.log('here');
  if (!patients) {
    return (<Loading />);
  }
  const Patients = patients.map(patient => (
    <PapperBlock icon="md-person" key={patient.id} title={patient.name} desc={patient.room}>
        Condition of patient :
      <br />
      {patient.alarm ? 'Heart Attack' : 'Healty'}
    </PapperBlock>
  ));
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {Patients}
    </div>
  );
}
const reducerFirestore = 'firestore';
BlankPage.propTypes = {
  // eslint-disable-next-line react/require-default-props
  patients: PropTypes.array,
};
const mapStateToProps = (state) => ({
  patients: state.get(reducerFirestore).ordered[COLLECTIONS.PATIENTS],
});
export default compose(
  firestoreConnect(() => [
    { collection: COLLECTIONS.PATIENTS },
  ]),
  connect(
    mapStateToProps,
    // mapDispatchToProps
  ))(withFirebase(BlankPage));
