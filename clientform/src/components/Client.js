import React from 'react'
import {formik,useFormik} from 'formik';
import { crmSchema } from './YupValidation';

function Client() {
  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
  ];
  const initialValues = {
    clientname: "",
    address:"",
    country:"",
    directSales: false,
    consultativeSales: false,
    requestForProposal: false,
    date:'',
    consultant:'',
    email:'',
    option:true,
    totalPrice:""
  };

  const formik = useFormik({
    initialValues:initialValues,
    validationSchema: crmSchema,
    onSubmit:(values, actions) => {
      console.log(values)
      actions.resetForm();
    },
  })
  console.log(formik)
  return (
    <div className='container'>
      <form action="" onSubmit={formik.handleSubmit}>
      <div className='row d-flex mt-5'>
        <div className='col-md-2'>
          <label htmlFor="clientname" className='mt-2'>Client Name</label>
        </div>
        <div className='col-md-8'>
          <input type="text" name='clientname' className='form-control' id='clientname'  
          onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.clientname} />
        {formik.errors.clientname && formik.touched.clientname ? <p className='text-danger'>{formik.errors.clientname}</p>:null}
        </div>
      </div>
      
      <div className='row d-flex mt-2'>
        <div className="col-md-2">
        <label htmlFor="address" className='mt-2'>Address</label>
        </div>
        <div className='col-md-8'>
        <textarea name="address" className='form-control' id="address" cols="95" rows="5" placeholder='enter address' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}/>
        {formik.errors.address && formik.touched.address ? <p className='text-danger'>{formik.errors.address}</p>:null}
        </div>
      </div>
      
      <div className='row d-flex mt-2'>
        <div className="col-md-2">
        <label htmlFor="country" className='mt-2'>Country</label>
        </div>
        <div className='col-md-4'>
        <select name="country" id="country" className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} >
          {countryList.map((country)=>(
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        {formik.errors.country && formik.touched.country ? <p className='text-danger'>{formik.errors.country}</p>:null}
        </div>
      </div>
      
      <div className='row d-flex mt-2'>
        <div className="col-md-2">
        <label htmlFor="type" className='mt-2'>Type</label>
        </div>
        <div className='col-md-8 d-flex justify-content-between mt-2'>
          <div>
            <input type="checkbox" name="directSales" id="directSales" value={formik.values.directSales}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/> 
            <label htmlFor="directSales" className='ms-1'>Direct Sales</label>
          </div>
          <div>
            <input type="checkbox" name="consultativeSales" id="consultativeSales" value={formik.values.consultativeSales}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} /> 
            <label htmlFor="consultativeSales" className='ms-1'>Consultative Sales</label>
          </div>
          <div>
            <input type="checkbox" name="requestForProposal" id="requestForProposal" value={formik.values.requestForProposal}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} /> 
            <label htmlFor="requestForProposal" className='ms-1'>Request for proposal</label>
          </div>
        </div>
      </div>

      <div className='row d-flex mt-2'>
        <div className="col-md-2">
        <label htmlFor="date" className='mt-2'>Date</label>
        </div>
        <div className='col-md-4'>
        <input type="date" name="date" id="date" className='form-control' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date}/>
        {formik.errors.date && formik.touched.date ? <p className='text-danger'>{formik.errors.date}</p>:null}
        </div>
      </div>

      <div className='row d-flex mt-2'>
        <div className='col-md-2'>
          <label htmlFor="consultant" className='mt-2'>Consultant</label>
        </div>
        <div className='col-md-8'>
          <input type="text" name='consultant' className='form-control' id='consultant' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.consultant} />
        {formik.errors.consultant && formik.touched.consultant ? <p className='text-danger'>{formik.errors.consultant}</p>:null}

        </div>
      </div>

      <div className='row d-flex mt-2'>
        <div className='col-md-2'>
          <label htmlFor="email" className='mt-2'> Email</label>
        </div>
        <div className='col-md-8'>
          <input type="email" name='email' className='form-control' id='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
        {formik.errors.email && formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p>:null}

        </div>
      </div>

      <div className='row d-flex mt-2'>
        <div className='col-md-2'>
          <label className='mt-2'>Approved</label>
        </div>
        <div className='col-md-3 d-flex justify-content-between'>
          <div>
          <input type="radio" name='option' id='option' value={true} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
          <label htmlFor="yes" className='ms-1'>yes</label>
          </div>
          <div>
          <input type="radio" name='option' id='option' value={false} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <label htmlFor="no" className='ms-1'>no</label>
          </div>
        </div>
      </div>
      
      <div className='row d-flex mt-2'>
        <div className='col-md-2'>
          <label htmlFor="totalPrice" className='mt-2'>Total Price</label>
        </div>
        <div className='col-md-8'>
          <input type="text" name='totalPrice' className='form-control' id='totalPrice' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.totalPrice}/>
        {formik.errors.totalPrice && formik.touched.totalPrice ? <p className='text-danger'>{formik.errors.totalPrice}</p>:null}

        </div>
      </div>
      <div className='d-flex justify-content-center mt-4'>
      <button className="btn btn-success" type='submit'>
            submit
      </button>
      </div>
      </form>
    </div>
  )
}

export default Client