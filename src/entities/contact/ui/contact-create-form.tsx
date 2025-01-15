import { z } from "zod";
import { Input } from "~/shared/ui/Input";
import { toBase64 } from "~/shared/helpers/to-base64";
import { useCreateContact } from "../model/useCreateContact";
import { FormErrorField } from "~/shared/ui/error-fields";

export function ContactCreateForm() {
  const { form } = useCreateContact();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-5">
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
                          className="w-full pl-10 pr-3 py-2  border rounded-md
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
                    // eslint-disable-next-line no-useless-escape
                    .min(1, { message: "This field has to be filled." })
                    .regex(
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

          <div className="flex flex-col gap-5">
            <div>
              <form.Field
                name="avatar"
                validators={{
                  onChange: z
                    .string()
                    .min(
                      3,
                      "avatar must be one of jpg,png,webp,avif,svg file types"
                    ),
                }}
                children={(field) => {
                  return (
                    <>
                      <div className="relative">
                        <div className="flex items-center space-x-2 w-full max-w-xs">
                          <label
                            htmlFor={field.name}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 cursor-pointer"
                          >
                            <span>Choose File</span>
                          </label>
                          <input
                            type="file"
                            size={2e7}
                            accept=".jpg,.png,.jpeg,.avif,.webp,.gif,.svg"
                            id={field.name}
                            name={field.name}
                            onBlur={field.handleBlur}
                            placeholder="Avatar"
                            className="hidden"
                            onChange={async (e) => {
                              const base64 = await toBase64(e.target.files![0]);
                              return field.handleChange(base64 as string);
                            }}
                          />
                          {!!field.state.value?.length && (
                            <img
                              width={40}
                              height={20}
                              src={field.state.value}
                              className="h-10 w-10"
                            />
                          )}
                        </div>
                        <FormErrorField field={field} />
                      </div>
                    </>
                  );
                }}
              />
            </div>
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
                      <Input
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
              className="border px-4 py-2  hover:bg-black/5 transition-colors duration-150"
              disabled={!canSubmit}
            >
              {isSubmitting ? "..." : "Submit"}
            </button>
          )}
        />
      </form>
    </div>
  );
}
