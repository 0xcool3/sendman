export default function Stats() {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-2">
        <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              5
            </h2>
            {/* <div className="flex items-center -space-x-2">
              <img
                className="flex-shrink-0 size-7 shadow-md rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Image Description"
              />
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                L
              </span>
              <img
                className="flex-shrink-0 size-7 shadow-md rounded-full"
                src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                className="flex-shrink-0 size-7 shadow-md rounded-full"
                src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Image Description"
              />
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                O
              </span>
            </div> */}
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h3 className="text-gray-500 dark:text-neutral-500">Recipients</h3>

            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded dark:bg-neutral-700"
                role="tooltip"
              >
                Limited Access Members can only access the projects, tasks, and
                messages explicitly shared with them.
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              5
            </h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h3 className="text-gray-500 dark:text-neutral-500">
              Tokens To Be Send
            </h3>

            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded dark:bg-neutral-700"
                role="tooltip"
              >
                Limited Access Members can only access the projects, tasks, and
                messages explicitly shared with them.
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              2
            </h2>
            <div className="flex items-center -space-x-2">
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                L
              </span>
              <span className="flex flex-shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                0
              </span>
            </div>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h3 className="text-gray-500 dark:text-neutral-500">
              Transactions
            </h3>

            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded dark:bg-neutral-700"
                role="tooltip"
              >
                Limited Access Members can only access the projects, tasks, and
                messages explicitly shared with them.
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              0.002 ETH
            </h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h3 className="text-gray-500 dark:text-neutral-500">Tool Fee</h3>

            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded dark:bg-neutral-700"
                role="tooltip"
              >
                Limited Access Members can only access the projects, tasks, and
                messages explicitly shared with them.
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              0.002 ETH
            </h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h3 className="text-gray-500 dark:text-neutral-500">GAS Fee</h3>

            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded dark:bg-neutral-700"
                role="tooltip"
              >
                Limited Access Members can only access the projects, tasks, and
                messages explicitly shared with them.
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              0.004 ETH
            </h2>
          </div>
          <div className="inline-flex items-center gap-x-2">
            <h3 className="text-gray-500 dark:text-neutral-500">COST</h3>

            <div className="hs-tooltip inline-block">
              <svg
                className="hs-tooltip-toggle flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 w-60 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded dark:bg-neutral-700"
                role="tooltip"
              >
                Limited Access Members can only access the projects, tasks, and
                messages explicitly shared with them.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
