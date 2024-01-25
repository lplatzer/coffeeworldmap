"use client";

import {ErrorMessage, Field, FieldArray, Form, Formik, FormikHelpers} from "formik";
import * as React from "react";

interface Values {
    coffeeName: string,
    roast: string,
    origin: string,
    variety: string,
    process: string,
    roaster: string,
    tasteNotes: string[],
}
export default function AddRecipe() {
    return (
        <div className="">
            <h1 className="font-bold text-4xl">
                Add new recipe
            </h1>
            <div className="flex items-center p-2">
                <Formik
                    initialValues={{
                        coffeeName: '',
                        roast: '',
                        origin: '',
                        variety: '',
                        process: '',
                        roaster: '',
                        tasteNotes: [
                            {
                                descriptor: '',
                            },
                        ],
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({ values }) => (
                    <Form>
                        <label htmlFor="coffeeName">Coffee Name</label>
                        <Field id="coffeeName" name="coffeeName" placeholder=""/>
                        <label htmlFor="roast">Roast</label>
                        <Field id="roast" name="roast" placeholder=""/>
                        <label htmlFor="origin">Origin</label>
                        <Field id="origin" name="origin" placeholder=""/>
                        <label htmlFor="variety">Origin</label>
                        <Field id="variety" name="variety" placeholder=""/>
                        <label htmlFor="process">Process</label>
                        <Field id="process" name="process" placeholder=""/>
                        <label htmlFor="roaster">Roaster</label>
                        <Field id="roaster" name="roaster" placeholder=""/>
                        <FieldArray name="tasteNotes">
                            {({ insert, remove, push}) => (
                                <div>
                                    {values.tasteNotes.length > 0 &&
                                    values.tasteNotes.map((tasteNote, index) => (
                                        <div key={index}>
                                            <div>
                                                <label htmlFor={`tasteNotes.${index}.descriptor`}>Taste Note</label>
                                                <Field
                                                    name={`tasteNotes.${index}.descriptor`}
                                                    placeholder=""
                                                    type="text"
                                                />
                                                <ErrorMessage
                                                    name={`tasteNotes.${index}.descriptor`}
                                                    component="div"
                                                    className="field-error"
                                                  />
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => remove(index)}
                                                    >
                                                    Rmove taste descriptor
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        className="secondary"
                                        onClick={() => push({ descriptor: ''})}
                                    >
                                        Add taste descriptor
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <button type="submit">Calculate</button>
                    </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}