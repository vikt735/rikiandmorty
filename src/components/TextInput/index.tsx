import { TextField } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';
import useStyleTextInput from './useStyleTextInput';

interface Props {
  label: string;
}

const TextInput = (props: Props & FieldHookConfig<string>) => {
  const [field] = useField(props);
  const { label } = props;
  const classes = useStyleTextInput();

  return (
    <TextField
      label={label}
      id={field.name}
      className={classes.textField}
      size="small"
      color="success"
      variant="standard"
      {...field}
    />
  );
};

export default TextInput;
