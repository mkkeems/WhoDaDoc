import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import {
  // symptomsList,
  englishSpeakingOptions,
  searchGroupedOptions,
} from '../../data/formData';
import ErrorMessage from '../../components/Form/ErrorMessage';
import Button from '../../components/Button';
import { SearchbarForm } from '../../components/Form/StyledForm';
import { IoSearchSharp } from 'react-icons/io5';

const formatGroupLabel = (data) => <span>{data.label}</span>;

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
        <SearchbarForm>
          <Controller
            name="selectedSymptoms"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <Select
                classNamePrefix="search-filter"
                placeholder="Search by symptoms or speacialties"
                options={searchGroupedOptions}
                isMulti={true}
                onChange={onChange}
                formatGroupLabel={formatGroupLabel}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderStyle: 'none',
                    minWidth: '400px',
                    marginTop: 0,
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            )}
          />
          <div className="bar"></div>
          <Controller
            name="englishSpeaking"
            control={control}
            render={({ field: { onChange } }) => (
              <Select
                classNamePrefix="search-filter"
                placeholder="English Speaking"
                options={englishSpeakingOptions}
                onChange={onChange}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderStyle: 'none',
                  }),
                }}
                components={{
                  IndicatorSeparator: () => null,
                }}
              />
            )}
          />
          <div className="search-icon-btn">
            <IoSearchSharp className="search-icon" />
          </div>
        </SearchbarForm>
        {errors.selectedSymptoms && (
          <ErrorMessage>
            Please select at least one symptom or specialty to search
          </ErrorMessage>
        )}
        <Button type="submit" className="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
