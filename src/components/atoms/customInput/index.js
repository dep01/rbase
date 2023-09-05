import { Input } from "antd";
import { useController } from "react-hook-form";
const CustomInput = ({
  control,
  name,
  id,
  placeholder = "",
  label = null,
  defaultvalue = null,
  errors = null,
  required = false,
  readonly = false,
  style = {},
  rules = {},
  classname = "",
  type='text',
  onKeydown,
  onPaste
}) => {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules,
    defaultvalue,
  });

  return (
    <div className={`col ${classname}`}>
      <div className="form-group">
        {label ? (
          <label>
            {label} {required ? "*" : ""}
          </label>
        ) : null}
        <Input
          id={id}
          style={style}
          type={type}
          name={name}
          ref={ref}
          onKeyDown={onKeydown}
          value={inputProps.value}
          readOnly={readonly}
          placeholder={placeholder}
          onChange={(val) => inputProps.onChange(val.target.value)}
          onPaste={onPaste}
        />
        <label className="text-danger">{errors?.message||""}</label>
      </div>
    </div>
  );
};

export default CustomInput;
