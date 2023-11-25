import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { symptomsList, englishSpeakingOptions } from '../../data/formData';
import ErrorMessage from '../../components/Form/ErrorMessage';
import Button from '../../components/Button';

const SearchForm = () => {
  const {
    // register,
    handleSubmit,
    // watch,
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
          rules={{
            required: true,
          }}
          render={({ field: { onChange } }) => (
            <Select
              placeholder="Search by symptoms or speacialties"
              options={symptomsList}
              isMulti={true}
              onChange={onChange}
            />
          )}
        />
        {errors.selectedSymptoms && (
          <ErrorMessage>
            Please select at least one symptom or specialty to search
          </ErrorMessage>
        )}
        <Controller
          name="englishSpeaking"
          control={control}
          render={({ field: { onChange } }) => (
            <Select
              placeholder="English Speaking"
              options={englishSpeakingOptions}
              onChange={onChange}
            />
          )}
        />

        <Button type="submit" className="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
