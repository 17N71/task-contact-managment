import { type FieldApi, useForm } from "@tanstack/react-form";
import { ContactEntity } from "../model/types";
import { useMutation } from "@tanstack/react-query";
import { ContactAPI } from "../api";
import { z } from "zod";
import { AtSign, FileIcon, Link, Mail, Newspaper, User } from "lucide-react";
import { Input } from "~/shared/ui/Input";
import { toBase64 } from "~/shared/helpers/to-base64";

const createContactSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  about: z.string(),
  avatar: z.string(),
  external_url: z.string(),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <>
      {field.state.meta.isTouched && field.state.meta.errors.length ? (
        <em className="text-red-600">{field.state.meta.errors.join(",")}</em>
      ) : null}
    </>
  );
}

export function ContactCreateForm() {
  const { mutateAsync } = useMutation(ContactAPI.createUser());
  const f = useForm<Omit<ContactEntity, "id">>({
    validators: {
      onSubmit: createContactSchema,
    },
    onSubmit: async ({ value }) => {
      if (value) {
        await mutateAsync(value);
      }
    },
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          f.handleSubmit();
        }}
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4">
          <div className="flex flex-col gap-5">
            <div>
              <f.Field
                name="name"
                validators={{
                  onChange: z
                    .string()
                    .min(3, "name must be at least 3 characters"),
                  onChangeAsyncDebounceMs: 500,
                  onChangeAsync: z.string().refine(
                    async (value) => {
                      await new Promise((resolve) => setTimeout(resolve, 1000));
                      return !value.includes("error");
                    },
                    {
                      message: "Name No 'error' allowed in name",
                    }
                  ),
                }}
                children={(field) => {
                  return (
                    <>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                      <FieldInfo field={field} />
                    </>
                  );
                }}
              />
            </div>
            <div>
              <f.Field
                name="username"
                validators={{
                  onChange: z.string().startsWith("@"),
                }}
                children={(field) => (
                  <>
                    <div className="relative">
                      <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="Username"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div>
              <f.Field
                name="email"
                validators={{
                  onChange: z
                    .string()
                    .min(1, { message: "This field has to be filled." }),
                }}
                children={(field) => (
                  <>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="Email"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <f.Field
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
                            <FileIcon className="w-5 h-5 mr-2" />
                            <span>Choose File</span>
                          </label>
                          <input
                            type="file"
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
                          {!!JSON.stringify(field.state.value)?.length && (
                            <img
                              width={40}
                              height={20}
                              src={field.state.value}
                              className="h-10 w-10"
                            />
                          )}
                        </div>
                        <FieldInfo field={field} />
                      </div>
                    </>
                  );
                }}
              />
            </div>
            <div>
              <f.Field
                name="external_url"
                validators={{
                  onChange: z.string(),
                }}
                children={(field) => (
                  <>
                    <div className="relative">
                      <Link className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="External url"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
            <div>
              <f.Field
                name="about"
                validators={{
                  onChange: z
                    .string()
                    .min(1, { message: "This field has to be filled." }),
                }}
                children={(field) => (
                  <>
                    <div className="relative">
                      <Newspaper className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input
                        id={field.name}
                        name={field.name}
                        placeholder="About"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <f.Subscribe
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
