import { useNavigate } from 'react-router-dom';
import { Button, MenuItem } from '@mui/material';
import { Form, Formik } from 'formik';
import useStyleFilter from './useStyleFilter';
import { QueryParams } from 'types';
import { buildQueryString } from 'utils/queryHelpers';
import FormSelect from 'components/FormSelect';
import TextInput from 'components/TextInput';

interface Props {
  queryParams: QueryParams;
}

const Filter = ({ queryParams }: Props):JSX.Element => {
  const classes = useStyleFilter();
  const navigate = useNavigate();

  const reset = () => {
    navigate('/');
  };

  return (
    <Formik
      initialValues={{ ...queryParams, page: '' }}
      onSubmit={(values) => {
        const query = buildQueryString(values);
        navigate(query);
      }}
      enableReinitialize
      onReset={reset}
    >
      <Form className={classes.filter} >
        <TextInput label="Name" name="name" />
        <TextInput label="Species" name="species" />
        <TextInput label="Type" name="type" />
        <FormSelect label="Gender" name="gender" defaultValue="all">
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="male">male</MenuItem>
          <MenuItem value="female">female</MenuItem>
          <MenuItem value="genderless">genderless</MenuItem>
          <MenuItem value="unknown">unknown</MenuItem>
        </FormSelect>
        <FormSelect label="Status" name="status" defaultValue="all">
          <MenuItem value="All">all</MenuItem>
          <MenuItem value="Alive">alive</MenuItem>
          <MenuItem value="Dead">dead</MenuItem>
          <MenuItem value="Unknown">unknown</MenuItem>
        </FormSelect>
        <div className={classes.filter__buttons}>
          <Button
            className={classes.submit}
            size="small"
            type="submit"
            variant="contained"
            color="success"
          >
            Submit
          </Button>
          <Button
            className={classes.submit}
            size="small"
            type="reset"
            variant="outlined"
            color="success"
          >
            Reset
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default Filter;
