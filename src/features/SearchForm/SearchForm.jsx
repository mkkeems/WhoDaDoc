import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { symptomsList, englishSpeakingOptions } from "../../data/formData";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const submittedFilters = Object.entries(data).reduce((res, curr) => {
      const [key, value] = curr;
      if (Array.isArray(value)) {
        res[key] = value.map((value) => value.value);
      } else {
        res[key] = value.value;
      }
      return res;
    }, {});

    console.log({ submittedFilters });
    // need to send this to backend
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="selectedSymptoms"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <label>Search Symptoms</label>
              <Select
                options={symptomsList}
                isMulti={true}
                onChange={onChange}
              />
            </>
          )}
        />
        <Controller
          name="englishSpeaking"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <>
              <label>English Speaking</label>
              <Select options={englishSpeakingOptions} onChange={onChange} />
            </>
          )}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
