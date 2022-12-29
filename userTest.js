import { Range }                       from "./Kolibri/contrib/p5_wild_wyss/src/range/range.js";
import { FocusRing }                   from "./Kolibri/contrib/p5_wild_wyss/src/focusring/focusRing.js";
import { LogFactory }                  from "./Kolibri/contrib/p5_wild_wyss/src/logger/logFactory.js";
import { Appender as ConsoleAppender } from "./Kolibri/contrib/p5_wild_wyss/src/logger/appender/consoleAppender.js";
import {
  setGlobalContext,
  setLoggingLevel,
  addToAppenderList,
  LOG_DEBUG,
  LOG_NOTHING,
} from "./Kolibri/contrib/p5_wild_wyss/src/logger/logger.js";

/**
 * @typedef ImageType
 * @property { String } path        - contains the path to /res/img/*.png
 * @property { String } description - contains a text from the {@link descriptions}
 */

/**
 * Placeholder value
 */
const TODO = undefined;

const imageElement          = document.getElementById("focusImage");
const prevButton            = document.getElementById("prevButton");
const nextButton            = document.getElementById("nextButton");
const disableLoggingButton  = document.getElementById("disableLoggingButton");
const descriptionElement    = document.getElementById("focusDescription");

const descriptions = [
  "Intelligent and knowledgeable about a particular subject or field.",
  "Highly skilled and proficient in the use of computers and technology.",
  "Interested in and enthusiastic about scientific and technical topics.",
  "Able to understand and explain complex or technical information in a clear and concise manner.",
  "Often perceived as being socially awkward or introverted.",
  "Have a strong passion for learning and intellectual pursuits.",
  "Known for their attention to detail and ability to think critically.",
  "May be seen as lacking in physical coordination or athletic ability.",
  "Tend to be organized and orderly in their work habits.",
  "May have a strong interest in science fiction, fantasy, or other nerdy pop culture phenomena.",
];

/**
 * Updates the UI Elements corresponding to the focus.
 * @param { ImageType } - the current focus
 */
const displayFocus = ({ path, desc }) => {
  imageElement.src = path;
  descriptionElement.innerText = desc;
};

/**
 * TODO 1.1: Create a range with 10 numbers starting with 0. Use {@link Range} for this exercise and store it in {@link imagesIds}.
 */
const imagesIds = TODO;

/**
 * TODO 1.2: Transform each element of the {@link imagesIds} to an object of type {@link ImageType}.
 * Result: The first object should look like: { path: "/res/img/0.png", desc: "Intelligent and knowledgeable about a particular subject or field."}
 * Use the array {@link descriptions} to fill the desc property.
 */
const imageObjects = TODO;

/**
 * TODO 1.3: Create a {@link FocusRing} containing the {@link imageObjects}.
 */
let ring = TODO;

/**
 * TODO 1.4: Move the focus to the right and update the displayed image using {@link displayFocus}.
 * Note: a focusring is an immutable data structure.
 *
 */
nextButton.onclick = () => {
  TODO;
};

/**
 * TODO 1.5: Move the focus to the left and update the displayed image using {@link displayFocus}.
 *
 * After this todo, you finished part 1 of the user test, thank you!
 */
prevButton.onclick = () => {
  TODO;
};


/**
 * TODO 2.1: Create a {@link LoggerType} using the {@link LogFactory} and the {@link formatLogMsg} function.
 * Set the current logger context to "ch.fhnw.usertest".
 * Tip: If you're having troubles, consider https://app.gitbook.com/o/BSdwyiSqacZJL2beM7Oh/s/JVfvXGJn8X5cFx3zcFcj/research-paper-ip5-functional-library-in-javascript/logging-framework#usage-via-logfactory
 */

/**
 * Creates a custom log message using the given parameters.
 * @type { FormatLogMessage }
 */
const formatLogMsg = context => logLevel => logMessage => {
  const date = new Date().toISOString();
  return `${context}: [${logLevel}] ${date}: ${logMessage}`;
};

const logger = TODO;

/**
 * TODO 2.2: Set the global logging level to {@link LOG_DEBUG} with {@link setLoggingLevel}.
 */
TODO;

/**
 * TODO 2.3: Create a {@link ConsoleAppender} and add it to the appender list.
 */
TODO;

/**
 * TODO 2.4: Clicks on the {@link nextButton} and {@link prevButton} buttons should be logged on level debug.
 * TODO 2.5: {@link displayFocus} should log the updated image path on level warn.
 */

/**
 * TODO 2.6: Set the current log level to {@link LOG_NOTHING}, when the disable button has been clicked.
 */
disableLoggingButton.onclick = () => TODO;
