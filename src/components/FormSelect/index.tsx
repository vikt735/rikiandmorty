import {
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';
import useStyleFormSelect from './useStyleFormSelect';
import { FieldHookConfig, useField } from 'formik';

interface Props {
  label: string;
}

const FormSelect = (props: Props & FieldHookConfig<string>) => {
  const [field] = useField(props);
  const { label, defaultValue, children } = props;
  const classes = useStyleFormSelect();

  return (
    <FormControl className={classes.formControl} size="small" color="success">
      <InputLabel id={field.name} className={classes.label}>{label}</InputLabel>
      <Select
        labelId={field.name}
        id={field.name}
        defaultValue={defaultValue}
        variant="standard"
        {...field}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default FormSelect;
