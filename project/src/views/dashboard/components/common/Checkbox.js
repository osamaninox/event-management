import React from 'react'

const Checkbox = () => {
  return (
    <>
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
          By Email
        </legend>
        <div className="mt-6 space-y-6">
          <div className="relative flex gap-x-3 cursor-pointer">
            <div className="flex h-6 items-center">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
            </div>
            <div className="text-sm leading-6 ">
              <label
                htmlFor="comments"
                className="font-medium text-gray-900 cursor-pointer "
              >
                Comments
              </label>
              <p className="text-gray-500">
                Get notified when someones posts a comment on a posting.
              </p>
            </div>
          </div>
        </div>
      </fieldset>
    </>
  );
}

export default Checkbox