<template>
  <div class="h-screen flex overflow-hidden bg-white" @keypress.ctrl="shortcuts">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden">
      <div class="fixed inset-0 flex z-40 bg-white p-10">
        <div class="w-full flex flex-col justify-center items-center">
          <a href="http://biota.rocks" target="_blank" class="flex-shrink-0 w-full group block">
            <div class="flex justify-center items-center">
              <img class="inline-block w-30" :src="'./logo_and_name.png'" alt />
            </div>
          </a>
          <div class="rounded-md bg-red-50 p-4 mt-5">
            <div class="flex">
              <div>
                <h3
                  class="text-sm leading-5 font-medium text-red-800"
                >The sandbox isn't available on mobile.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div class="h-0 flex-1 flex flex-col pt-4 pb-4 overflow-y-auto">
          <!-- <div class="flex items-center flex-shrink-0 px-4">
            <img class="h-8 w-auto" src="/img/logos/workflow-logo-on-white.svg" alt="Workflow" />
          </div>-->
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="flex-1 px-2 bg-white">
            <a
              href="#"
              class="group flex items-center px-2 py-2 mb-3 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
            >Schema</a>
            <a
              href="#"
              class="group flex items-center px-2 py-2 mb-3 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 opacity-25 cursor-default"
            >Search</a>
            <a
              href="#"
              class="group flex items-center px-2 py-2 mb-3 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 opacity-25 cursor-default"
            >Authentication</a>
            <a
              href="#"
              class="group flex items-center px-2 py-2 mb-3 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 opacity-25 cursor-default"
            >User-Management</a>
            <a
              href="#"
              class="group flex items-center px-2 py-2 mb-3 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150 opacity-25 cursor-default"
            >Scaffolding</a>
          </nav>
        </div>
        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a
            href="http://biota.rocks"
            target="_blank"
            class="flex-shrink-0 w-full group block opacity-25 hover:opacity-100"
          >
            <div class="flex justify-center items-center">
              <img class="inline-block w-30" :src="'./logo_and_name.png'" alt />
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          aria-label="Open sidebar"
        >
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main
        class="flex-1 flex flex-col relative z-0 overflow-y-auto focus:outline-none"
        tabindex="0"
      >
        <div class="bg-white px-4 py-3 border-b border-r border-gray-200 sm:px-6">
          <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
            <div class="ml-4 mt-2">
              <h3 class="text-lg leading-6 font-medium text-gray-300">Sandbox</h3>
            </div>
            <div class="ml-4 mt-2 flex-shrink-0 flex flex-row justify-end items-center">
              <!-- <div
                v-show="bugCounts[this.caseHash]"
                class="text-xs text-red-600 underline mr-4"
              >{{`Bug reported for this scenario (${pluralize('time', bugCounts[this.caseHash], true)})` }}</div>-->
              <!-- <dropdown>
                <button
                  type="button"
                  class="relative inline-flex items-center px-4 py-2 mr-4 border border-gray-400 text-xs leading-5 font-medium rounded-md text-gray-500 bg-transparent hover:bg-gray-100"
                  :class="{' border-red-400 text-red-500 hover:bg-red-100': bugCounts[caseHash]}"
                >
                  <span v-if="bugCounts[caseHash]" class="text-red-600 mr-3">Add comment to this bug</span>
                  <span v-else class="mr-2">Report a bug</span>
                  <span
                    v-show="bugCounts[caseHash]"
                    class="font-bold text-red-600"
                  >{{bugCounts[caseHash]}}</span>
                  <svg
                    class="-mr-1 h-4 w-4"
                    :class="{'text-red-600': bugCounts[caseHash]}"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
                <div slot="content" slot-scope="{close}" class="p-3">
                  <div class="mt-1 sm:mt-0 sm:col-span-2 flex flex-col">
                    <div>
                      <div class="max-w-lg flex rounded-md shadow-sm">
                        <textarea
                          v-model="bugComment"
                          rows="3"
                          class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                        ></textarea>
                      </div>
                    </div>
                    <div class="mt-2 flex flex-row items-end justify-between">
                      <p class="text-sm text-gray-400">Add some comments if needs be.</p>
                      <button
                        v-if="bugCounts[caseHash]"
                        @click="() => {close(); reportBug();} "
                        type="button"
                        class="relative inline-flex items-center px-3 py-1 border border-red-400 text-xs leading-5 font-medium rounded-md text-red-500 bg-transparent hover:bg-red-100"
                      >Add comment</button>
                      <button
                        v-else
                        @click="() => {close(); reportBug();} "
                        type="button"
                        class="relative inline-flex items-center px-3 py-1 border border-gray-400 text-xs leading-5 font-medium rounded-md text-gray-500 bg-transparent hover:bg-gray-100"
                      >Report</button>
                    </div>
                  </div>
                </div>
              </dropdown>-->
              <button
                @click="randomSample"
                type="button"
                class="mr-3 relative inline-flex items-center px-4 py-2 text-xs leading-5 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
              >Random</button>
              <dropdown :items="samples" :closeOnClick="true" @choice="loadSample">
                <button
                  type="button"
                  class="mr-3 relative inline-flex items-center px-4 py-2 mr-4 text-xs leading-5 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                >
                  Samples
                  <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </dropdown>
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  @click="() => process()"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-400 text-xs leading-5 font-medium rounded-md text-gray-500 bg-transparent hover:bg-gray-100"
                >Run</button>
              </span>
            </div>
          </div>
        </div>
        <div class="flex-1 flex flex-row flex-wrap">
          <div class="w-2/4 flex flex-col flex-wrap items-stretch">
            <div class="w-full flex flex-col flex-wrap flex-grow">
              <div
                class="border-b border-gray-200 p-3 mb-3 bg-gray-50 flex flex-row justify-between items-center"
              >
                <div class="text-xs font-bold uppercase">Schema</div>
              </div>
              <MonacoEditor
                ref="schemaEditor"
                @editorWillMount="editorWillMount"
                @editorDidMount="editorDidMount"
                class="editor overflow-visible flex-grow w-full"
                style="min-height: 280px;"
                v-model="schema"
                :options="editorOptions"
                language="json"
              />
              <!-- <resize-observer class="relative" @notify="(e) => handleResize('schemaEditor')(e)" /> -->
            </div>
            <div class="flex flex-col flex-wrap">
              <div
                class="border-b border-t border-r border-gray-200 p-3 mb-3 bg-gray-50 text-xs font-bold uppercase"
              >Input</div>
              <MonacoEditor
                ref="inputEditor"
                @editorDidMount="editorDidMount"
                class="editor overflow-visible flex-grow w-full"
                style="min-height: 250px;"
                v-model="input"
                :options="editorOptions"
                language="json"
              />
              <!-- <resize-observer class="relative" @notify="(e) => handleResize('inputEditor')(e)" /> -->
            </div>
            <div class="flex flex-col flex-wrap">
              <div
                v-show="!descriptionHidden"
                class="border-t border-gray-200 px-10 py-8 text-sm bg-gray-50 text-gray-600"
              >
                <p class="mb-2">
                  You're in
                  <span class="text-grey-900 font-semibold">biota's schema module sandbox</span>. A
                  <span class="text-grey-900 font-semibold">JSON-Schema validator</span> right within FaunaDB (hosted within User-Defined Functions).
                  It lets you do in-depth tests with a detailed error reporting. It'll soon let you define schemas that once used in a role predicate or any FQL tests will allow you to strongly type a collection schema for example.
                </p>
                <p class>
                  This module is currently in
                  <i>preview</i>. It is in the process of being
                  <a
                    href="https://biota.rocks/modules/schema"
                    class="text-grey-900 font-semibold underline"
                    target="_blank"
                  >documented</a>. In the meanwhile, feal free to reach out through
                  <a
                    href="https://fauna-community.slack.com/archives/C011CMPS7AB"
                    class="text-grey-900 font-semibold underline"
                    target="_blank"
                  >biota's channel within the Fauna Community Slack</a>.
                </p>
                <div class="flex justify-start mt-3">
                  <span class="mt-3 flex rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      @click="descriptionHidden = true"
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 px-2 py-1 bg-white text-xs leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:leading-5"
                    >Hide</button>
                  </span>
                </div>
              </div>
              <div
                v-show="descriptionHidden"
                class="border-t border-gray-200 px-10 py-4 text-sm bg-gray-50 text-gray-600"
              >
                <div class="flex justify-start">
                  <span class="mt-3 flex rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      @click="descriptionHidden = false"
                      type="button"
                      class="inline-flex justify-center w-full rounded-md border border-gray-300 px-2 py-1 bg-white text-xs leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:leading-5"
                    >Learn more about the project</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-2/4 flex flex-col flex-wrap border-l border-gray-200">
            <div class="w-full flex flex-col flex-wrap flex-grow">
              <div
                class="border-b border-r border-gray-200 p-3 mb-3 bg-gray-50 text-xs flex flex-row justify-between items-center"
              >
                <span class="uppercase font-bold">Result</span>
                <span
                  class="text-gray-400 font-medium"
                >{{duration > 0 ? `done in ≈ ${duration} ms` : ""}}</span>
              </div>
              <MonacoEditor
                ref="outputEditor"
                @editorDidMount="editorDidMount"
                class="editor overflow-visible flex-grow w-full"
                style="min-height: 340px;"
                v-model="output"
                :options="editorOptions"
                language="json"
              />
              <!-- <resize-observer class="relative" @notify="e => handleResize('outputEditor')(e)" /> -->
            </div>
            <div class="flex flex-row flex-wrap justify-start items-stretch">
              <div class="w-2/5 flew-grow border-r border-gray-200">
                <div
                  class="border-b border-t border-gray-200 p-3 bg-gray-50 text-xs font-bold uppercase"
                >Configuration</div>
                <dl>
                  <div class="grid grid-cols-5 px-4 py-5">
                    <dt class="col-span-3 text-sm leading-5 font-medium text-gray-500">
                      <span title="Fast">Fast</span>
                      <br />
                      <small class="text-gray-400">Stop on first error</small>
                      <!-- <svg
                        class="h-4 w-4 inline"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>-->
                    </dt>
                    <dd class="mt-1 text-sm font-bold leading-5 text-gray-900">
                      <toggle v-model="config.fastMode"></toggle>
                    </dd>
                  </div>
                </dl>
                <dl>
                  <div class="grid grid-cols-5 px-4 py-5">
                    <dt class="col-span-3 text-sm leading-5 font-medium text-gray-500">
                      <span title="Fast">Language</span>
                      <br />
                      <small class="text-gray-400">for error messages</small>
                      <br />
                      <a
                        href="https://github.com/biotajs/biota/blob/master/packages/biota-schema/src/factory/templates.ts"
                        target="_blank"
                        class="text-gray-400 underline"
                      >
                        <small>translations</small>
                      </a>
                    </dt>
                    <dd class="col-span-2 mt-1 text-sm font-bold leading-5 text-gray-900">
                      <c-select
                        :value="config.language"
                        :choices="['en', 'fr']"
                        @select="(l) => config.language = l"
                      ></c-select>
                    </dd>
                  </div>
                </dl>
              </div>
              <div class="w-3/5 flex flex-col flex-wrap">
                <!-- <div class="w-full bg-blue-600 p-3 text-white">Infos</div> -->
                <div class>
                  <div
                    class="border-b border-t border-r border-gray-200 p-3 bg-gray-50 text-xs font-bold uppercase"
                  >Details</div>

                  <dl>
                    <div class="px-4 py-5 grid grid-cols-5 sm:px-6">
                      <dt class="col-span-3 text-sm leading-5 font-medium text-gray-500">Valid</dt>
                      <dd
                        class="col-span-2 mt-1 text-sm font-bold leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                        :class="{'text-green-600': outputObj.valid== true, 'text-red-600': outputObj.valid == false}"
                      >{{ typeof outputObj.valid === undefined ? '-' : outputObj.valid}}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div class="px-4 py-5 grid grid-cols-5 sm:px-6">
                      <dt class="col-span-3 text-sm leading-5 font-medium text-gray-500">Sanitized</dt>
                      <dd
                        class="col-span-2 mt-1 text-sm font-bold leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                        :class="{'text-orange-500': outputObj.sanitized == true}"
                      >{{ typeof outputObj.sanitized === undefined ? '-' : outputObj.sanitized}}</dd>
                    </div>
                  </dl>
                </div>
                <div v-show="requestFailed" class>
                  <div
                    class="border-b border-t border-r border-gray-200 p-5 bg-gray-50 text-xs font-bold text-white bg-red-500"
                  >
                    <p>Sadly the request failed.</p>
                    <p>An automatic bug report has been sent.</p>
                  </div>
                </div>
                <div class>
                  <div
                    class="border-b border-t border-r border-gray-200 p-3 bg-gray-50 text-xs font-bold uppercase"
                    :class="{'text-white bg-red-600': outputObj.valid == false, 'text-white bg-green-500': outputObj.valid == true}"
                  >{{pluralize('Error', Array.isArray(outputObj.errors) ? outputObj.errors.length : 0, true)}}</div>
                  <dl v-if="outputObj && Array.isArray(outputObj.errors)">
                    <div
                      v-for="error of outputObj.errors"
                      :key="error.message"
                      class="px-4 py-5 grid grid-cols-5 sm:px-6"
                    >
                      <dt
                        class="col-span-3 text-sm leading-5 font-medium text-red-600"
                      >{{error.type}}</dt>
                      <dd
                        class="col-span-2 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >{{error.message}}</dd>
                    </div>
                  </dl>
                  <dl v-else>
                    <div class="px-4 py-5 grid grid-cols-5 sm:px-6">
                      <dt class="col-span-3 text-sm leading-5 font-medium text-gray-500">-</dt>
                      <dd
                        class="col-span-2 mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2"
                      >-</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white px-4 py-5 border-b border-t border-r border-gray-200 sm:px-6">
          <div class="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap">
            <div class="ml-4 mt-2">
              <span class="text-xs text-gray-400 underline mr-3">
                <a
                  href="https://fauna-community.slack.com/archives/C011CMPS7AB"
                  target="_blank"
                >Join #biota's channel</a>
              </span>
              <span class="text-xs text-gray-400 underline">
                <a href="https://github.com/biotajs/biota" target="_blank">Github Repo</a>
              </span>
            </div>
            <div class="ml-4 mt-2 flex-shrink-0">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  @click="() => process()"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-400 text-xs leading-5 font-medium rounded-md text-gray-500 bg-transparent hover:bg-gray-100"
                >Run (ctrl + enter)</button>
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import pluralize from "pluralize";
import fauna from "faunadb";
import ushash from "ushash";

import { samples } from "./samples";
import dropdown from "~/components/dropdown";
import toggle from "~/components/toggle";
import select from "~/components/select";
const q = fauna.query;
import MonacoEditor from "vue-monaco";
const db = new fauna.Client({ secret: process.env.FAUNA_KEY });

export default {
  components: {
    MonacoEditor,
    dropdown,
    toggle,
    "c-select": select
    // "vue-json-pretty": () => (process.client ? import("vue-json-pretty") : null)
  },
  data() {
    return {
      pluralize,
      samples,
      duration: 0,
      config: {
        fastMode: false,
        language: "en"
      },
      descriptionHidden: false,
      schema: ``,
      input: ``,
      output: ``,
      bugCounts: {},
      bugCountsRefreshedAt: -1,
      bugComment: "",
      requestFailed: false,
      editorOptions: {
        contextmenu: false,
        minimap: {
          enabled: false
        },
        automaticLayout: true
      },
      outputOptions: {
        deep: 4,
        showLength: true,
        showLine: true,
        showSelectController: true,
        selectOnClickNode: true,
        showDoubleQuotes: true,
        highlightMouseoverNode: true,
        highlightSelectedNode: true,
        collapsedOnClickBrackets: true
      }
    };
  },
  mounted() {
    this.schema = localStorage.getItem("schema") || ``;
    this.input = localStorage.getItem("input") || ``;
    this.output = localStorage.getItem("output") || ``;
    try {
      this.config = JSON.parse(localStorage.getItem("config")) || {};
    } catch (error) {
      console.error(error);
    }
    this.descriptionHidden = localStorage.getItem("descriptionHidden") || false;

    try {
      this.bugCounts = JSON.parse(localStorage.getItem("bugCounts") || `{}`);
    } catch (error) {}
    try {
      this.bugCountsRefreshedAt =
        Number(localStorage.getItem("bugCountsRefreshedAt")) || "-1";
    } catch (error) {}
  },
  methods: {
    randomSample() {
      const samples = Object.entries(this.samples).filter(
        ([key, value]) => typeof value !== "boolean"
      );
      const samplesMax = samples.length - 1;
      const randomIdx = Math.floor(Math.random() * (samplesMax - 0 + 1) + 0);
      const randomKey = samples[randomIdx][0];
      this.loadSample(randomKey);
    },
    async reportBug() {
      return db
        .query(
          q.Call("ReportBug", {
            hash: this.hash,
            caseHash: this.caseHash,
            message: this.bugComment,
            input: this.inputValue,
            schema: this.schemaObj,
            result: this.outputObj
          })
        )
        .then(({ data }) => {
          if (data) {
            return this.refreshBugCounts(true);
          } else {
            console.log("failed");
          }
        })
        .catch(() => {});
    },
    shortcuts(e) {
      if (e.ctrlKey && (e.key === "Enter" || e.code === "Enter")) {
        e.preventDefault();
        e.stopPropagation();
        this.process();
      }
    },
    editorWillMount(monaco) {},
    editorDidMount(editor) {
      editor.onKeyDown(e => {
        this.shortcuts(e);
      });
    },
    loadSample(name) {
      if (samples[name]) {
        this.schema = JSON.stringify(samples[name].schema, null, 2);
        this.input = JSON.stringify(samples[name].input, null, 2);
        this.output = "";
        this.process();
      }
    },
    async process() {
      this.output = "";
      console.log("Running query..");
      try {
        this.refreshBugCounts();
      } catch (error) {}
      try {
        this.requestFailed = false;
        let value = JSON.parse(this.input);
        if (value && typeof value === "object") {
          if (
            Object.keys(value).some(key => key.startsWith("@")) ||
            (Object.keys(value).length === 1 && "date" in value)
          ) {
            value = new fauna.Expr(value);
          }
        }
        const startTime = new Date().getTime();
        const results = await db.query(
          q.Call(
            "biota.schema@0.0.11+Validate",
            {},
            {
              value,
              options: {
                validate: JSON.parse(this.schema)
              },
              state: {
                full: !this.config.fastMode,
                language: this.config.language
              }
            }
          )
        );
        const endTime = new Date().getTime();
        this.duration = endTime - startTime;

        console.log("duration", this.duration);

        console.log("Done with:", results);
        this.output = JSON.stringify(results.response, null, 2);
      } catch (error) {
        this.requestFailed = true;
        this.reportBug();
        console.error(error);
      }
    },
    async refreshBugCounts(force = false) {
      if (
        force ||
        this.bugCountsRefreshedAt < 0 ||
        this.bugCountsRefreshedAt + 3600 > new Date().getTime()
      ) {
        console.log("refreshBugCounts");
        return db
          .query(
            q.ToObject(
              q.Select(
                "data",
                q.Paginate(q.Match(q.Index("bug_report__caseHash_count")), {
                  size: 100000
                }),
                []
              )
            )
          )
          .then(res => {
            if (res) {
              this.bugCounts = res;
              this.bugCountsRefreshedAt = new Date().getTime();
            } else {
            }
          })
          .catch(console.error);
      }
    }
  },
  computed: {
    inputValue() {
      try {
        return JSON.parse(this.input);
      } catch (error) {
        return {};
      }
    },
    schemaObj() {
      try {
        return JSON.parse(this.schema);
      } catch (error) {
        return {};
      }
    },
    outputObj() {
      try {
        return JSON.parse(this.output);
      } catch (error) {
        return {};
      }
    },
    result() {
      try {
        return this.outputObj.value;
      } catch (error) {
        return "";
      }
    },
    hash() {
      return ushash.hash(
        [
          this.bugComment || "#bugComment",
          this.inputValue || "#inputValue",
          this.schemaObj || "#schemaObj",
          this.outputObj || "#outputObj"
        ]
          .map(JSON.stringify)
          .join("")
      );
    },
    caseHash() {
      return ushash.hash(
        [
          this.inputValue || "#inputValue",
          this.schemaObj || "#schemaObj",
          this.outputObj || "#outputObj"
        ]
          .map(JSON.stringify)
          .join("")
      );
    }
  },
  watch: {
    descriptionHidden(descriptionHidden) {
      localStorage.setItem("descriptionHidden", descriptionHidden);
    },
    schema(schema) {
      localStorage.setItem("schema", schema);
    },
    input(input) {
      localStorage.setItem("input", input);
    },
    output(output) {
      localStorage.setItem("output", output);
    },
    config: {
      handler(config) {
        localStorage.setItem("config", JSON.stringify(config));
      },
      deep: true
    },
    bugCounts(bugCounts) {
      localStorage.setItem("bugCounts", JSON.stringify(bugCounts));
    },
    bugCountsRefreshedAt(bugCountsRefreshedAt) {
      localStorage.setItem(
        "bugCountsRefreshedAt",
        JSON.stringify(bugCountsRefreshedAt)
      );
    }
  }
};
</script>

<style>
</style>
