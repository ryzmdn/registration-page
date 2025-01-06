import PropTypes from "prop-types";

import { EnvelopeIcon, LockClosedIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/solid";

import { Button } from "./Button";
import { ContinueButtons } from "./ContinueButtons";
import { Divider } from "./Divider";
import { Input, Label } from "./Input";
import { ContainerLayout } from "./Layout";

export function Register({ changePage }) {
  return (
    <ContainerLayout>
      <div className="mx-auto space-y-10 w-full max-w-sm lg:w-96">
        <div className="text-center lg:text-start">
          <img alt="Your Company" src="/primary-icon.svg" className="size-16 mx-auto lg:mx-0" />
          <h3 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900">
            Create new account
          </h3>
        </div>

        <div className="space-y-6">
          <div>
            <form action="#" method="POST" className="flex flex-col gap-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="your user name"
                  icon={UserIcon}
                />
              </div>

              <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="youremail@example.com"
                  icon={EnvelopeIcon}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="123-456-7890"
                  icon={PhoneIcon}
                />
              </div>

              <div>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="1234"
                  icon={LockClosedIcon}
                />
              </div>

              <div>
                <Label htmlFor="password">Confirm password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="1234"
                  icon={LockClosedIcon}
                />
              </div>

              <div>
                <div className="flex gap-3">
                  <div className="flex h-6 shrink-0 items-center">
                    <div className="group grid size-4 grid-cols-1">
                      <input
                        id="accept-terms"
                        name="accept-terms"
                        type="checkbox"
                        className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-purple-600 checked:bg-purple-600 indeterminate:border-purple-600 indeterminate:bg-purple-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="accept-terms"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    I accept <a href="/" className="underline text-purple-600">Terms of Service and Privacy Policy</a>
                  </label>
                </div>
              </div>

              <div>
                <Button variant="primary">Register</Button>
              </div>
            </form>
          </div>

          <Divider />

          <ContinueButtons />
        </div>
      </div>

      <div className="text-center">
        <p className="mt-6 text-sm/6 text-gray-500">
          Already have an account?{" "}
          <Button variant="text" onClick={changePage} className="px-0">
            Login
          </Button>
        </p>
      </div>
    </ContainerLayout>
  );
}

Register.propTypes = {
  changePage: PropTypes.func.isRequired
}
