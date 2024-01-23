// "use client";
//
// import * as React from "react";
// import * as yup from "yup";
// import {FieldConfig, Form, FormikProvider, useField, useFormik} from "formik";
//
// type FieldHookConfig<
//     T,
//     U extends 'input' | 'textarea'
// > = React.JSX.IntrinsicElements[U] & FieldConfig<T>;
//
// const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));
// const CustomTextField = ({ label, helpText, ...props} : FieldHookConfig<string, 'input'> & { label:string, helpText: string}) => {
//     const [field, meta] = useField(props);
//     const [didFocus, setDidFocus] = React.useState(false);
//     const handleFocus = () => setDidFocus(true);
//     const showFeedback = (!!didFocus && field.value.trim().length > 1) || meta.touched;
//
//     return(
//         <div
//             className={`form-control ${ showFeedback ? (meta.error ? 'invalid' : 'valid') : ''}`}
//         >
//             <div className="flex items-center space-between">
//                 <label htmlFor={props.id}>{label}</label>
//                 {showFeedback ? (
//                     <div
//                         id={`${props.id}-feedback`}
//                         className={`feedback text-sm`}
//                     >
//                         {meta.error ? meta.error : "valid input"}
//                     </div>
//                 ) : null}
//             </div>
//             <input
//                 {...props}
//                 {...field}
//                 onFocus={handleFocus}
//             />
//             <div className="text-xs" id={`${props.id}-help`} tabIndex={-1}>
//                 {helpText}
//             </div>
//         </div>
//     )
// }
//
// export default function Calculator() {
//     const formik = useFormik({
//         initialValues: {
//             coffeeDose: '4',
//             tds: '',
//             // beverage: '',
//
//         },
//         onSubmit: async (values) => {
//             await sleep(1);
//             // This is where the api call will go once set up; should have authentication requirement
//             // to only log brews that are actually by me
//             alert(JSON.stringify(values, null, 2));
//         },
//         validationSchema: yup.object({
//             // coffeeDose: yup.string()
//             //     .required('Coffee Dose is required'),
//             tds: yup.string()
//                 .required("Coffee TDS is required"),
//             // beverage: yup.string()
//             //     .required("Beverage amount is required"),
//         }),
//     });
//     return(
//         <div>
//             <FormikProvider value={formik}>
//                 <Form>
//                     <CustomTextField
//                         label="Coffee (g)"
//                         id="coffeeDose"
//                         name="coffeeDose"
//                         helpText="Coffee Dose in grams"
//                         type="text"
//                     />
//                     {/*<CustomTextField*/}
//                     {/*    label="TDS"*/}
//                     {/*    id="tds"*/}
//                     {/*    name="tds"*/}
//                     {/*    helpText="coffee tds"*/}
//                     {/*    type="text"*/}
//                     {/*/>*/}
//                     {/*<CustomTextField*/}
//                     {/*    label="TDS"*/}
//                     {/*    id="tds"*/}
//                     {/*    name="tds"*/}
//                     {/*    helpText="coffee tds"*/}
//                     {/*    type="text"*/}
//                     {/*/>*/}
//                     <div>
//                         <button type="submit">Submit</button>
//                         <button type="reset">Reset</button>
//                     </div>
//                 </Form>
//             </FormikProvider>
//         </div>
//     );
// }

"use client";

import * as React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";

interface Values {
    coffeeDose: number;
    tds: number;
    beverage: number;
}

export default function Calculator() {
    const [calcResult, setCalcResult] = React.useState(null);
    return (
        <div className="">
            <div className="flex items-center p-2">
                <Formik
                    initialValues={{
                        coffeeDose: '',
                        tds: '',
                        beverage: '',
                    }}
                    onSubmit={(
                        values: Values,
                        { setSubmitting }: FormikHelpers<Values>,

                    ) => {

                        setTimeout(() => {
                            // values.calcResult = values.beverage*values.tds/values.coffeeDose;
                            // alert(JSON.stringify(values, null, 2) + values.calcResult);
                            setCalcResult(values.beverage*values.tds/values.coffeeDose);
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    <Form>
                        <label htmlFor="coffeeDose">Coffee Dose (g)</label>
                        <Field id="coffeeDose" name="coffeeDose" placeholder="Coffee Dose"/>
                        <label htmlFor="tds">Coffee Dose</label>
                        <Field id="tds" name="tds" placeholder="TDS"/>
                        <label htmlFor="beverage">Beverage</label>
                        <Field id="beverage" name="beverage" placeholder="Coffee Dose"/>
                        <button type="submit">Calculate</button>
                    </Form>
                </Formik>
            </div>
            <div className="min-w-10 min-h-10 items-center flex pl-5">
                <span className="">
                    {calcResult}
                </span>
            </div>
        </div>
    )
}