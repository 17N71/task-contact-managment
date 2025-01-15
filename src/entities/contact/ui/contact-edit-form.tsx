import { z } from "zod";
import { Input } from "~/shared/ui/Input";
import { FormErrorField } from "~/shared/ui/error-fields";
import { SquareArrowLeft } from "lucide-react";
import { ContactEntity } from "../model/types";
import { useEditContact } from "../model/useEditContact";

export function ContactEditForm({ contact }: { contact: ContactEntity }) {
  const { form, goBack } = useEditContact(contact);

  return (
    <div className="w-full">
      <div className="bg-secondary py-4 h-70h w-full pl-9 flex items-center gap-3">
        <button onClick={goBack} className="my-2" type="button">
          <SquareArrowLeft size={32} strokeWidth={1} />
        </button>
        Edit {contact.name} information
      </div>
      <div className="w-1/2 mt-7 pl-9">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full flex flex-col gap-5">
              <div>
                <form.Field
                  name="name"
                  validators={{
                    onChange: z
                      .string()
                      .min(3, "name must be at least 3 characters"),
                  }}
                  children={(field) => {
                    return (
                      <>
                        <div className="relative">
                          <Input
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            placeholder="Name"
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="pr-3 py-2  border rounded-md
                              focus:outline-none  focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <FormErrorField field={field} />
                      </>
                    );
                  }}
                />
              </div>
              <div>
                <form.Field
                  name="username"
                  validators={{
                    onChange: z.string().startsWith("@"),
                  }}
                  children={(field) => (
                    <>
                      <div className="relative">
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="Username"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                      <FormErrorField field={field} />
                    </>
                  )}
                />
              </div>
              <div>
                <form.Field
                  name="email"
                  validators={{
                    onChange: z
                      .string()
                      .min(1, { message: "This field has to be filled." })
                      .regex(
                        // eslint-disable-next-line no-useless-escape
                        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        "Please write correct email"
                      ),
                  }}
                  children={(field) => (
                    <>
                      <div className="relative">
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="Email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                      <FormErrorField field={field} />
                    </>
                  )}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-5">
              <div>
                <form.Field
                  name="external_url"
                  validators={{
                    onChange: z.string(),
                  }}
                  children={(field) => (
                    <>
                      <div className="relative">
                        <Input
                          id={field.name}
                          name={field.name}
                          placeholder="External url"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                      <FormErrorField field={field} />
                    </>
                  )}
                />
              </div>
              <div>
                <form.Field
                  name="about"
                  validators={{
                    onChange: z
                      .string()
                      .min(1, { message: "This field has to be filled." }),
                  }}
                  children={(field) => (
                    <>
                      <div className="relative">
                        <textarea
                          className="px-2 py-2 min-h-10 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          id={field.name}
                          name={field.name}
                          placeholder="About"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                        />
                      </div>
                      <FormErrorField field={field} />
                    </>
                  )}
                />
              </div>
            </div>
          </div>

          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
            children={([canSubmit, isSubmitting]) => (
              <button
                type="submit"
                className="border px-4 py-2 w-full mt-3 bg-blue-500/80 text-white hover:bg-blue-500/100 transition-colors duration-150"
                disabled={!canSubmit}
              >
                {isSubmitting ? "..." : "Submit"}
              </button>
            )}
          />
        </form>
      </div>
    </div>
  );
}
