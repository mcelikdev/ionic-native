import { Cordova, Plugin } from './plugin';


/**
 * @name Social Sharing
 * @description
 * Share text, files, images, and links via social networks, sms, and email.
 * @usage
 * ```typescript
 * import { SocialSharing } from 'ionic-native';
 *
 * // Check if sharing via email is supported
 * SocialSharing.canShareViaEmail().then(() => {
 *   // Sharing via email is possible
 * }).catch(() => {
 *   // Sharing via email is not possible
 * });
 *
 * // Share via email
 * SocialSharing.shareViaEmail('Body', 'Subject', 'recipient@example.org').then(() => {
 *   // Success!
 * }).catch(() => {
 *   // Error!
 * });
 * ```
 */
@Plugin({
  plugin: 'cordova-plugin-x-socialsharing',
  pluginRef: 'plugins.socialsharing',
  repo: 'https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin',
  platforms: ['iOS', 'Android', 'Windows Phone']
})
export class SocialSharing {
  /**
   * Shares using the share sheet
   * @param message {string} The message you would like to share.
   * @param subject {string} The subject
   * @param file {string|string[]} URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone.
   * @param url {string} A URL to share
   * @returns {Promise}
   */
  @Cordova()
  static share(message?: string, subject?: string, file?: string|string[], url?: string): Promise<any> { return; }

  /**
   * Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)
   * @param options {object} The options object with the message, subject, files, url and chooserTitle properties.
   * @returns {Promise}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  static shareWithOptions(options: { message?: string, subject?: string, files?: string|string[], url?: string, chooserTitle?: string }): Promise<any> { return; }

  /**
   * Checks if you can share via a specific app.
   * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
   * @param message {string}
   * @param subject {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 5,
    errorIndex: 6,
    platforms: ['iOS', 'Android']
  })
  static canShareVia(appName: string, message?: string, subject?: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Shares directly to Twitter
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
    platforms: ['iOS', 'Android']
  })
  static shareViaTwitter(message: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Shares directly to Facebook
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
    platforms: ['iOS', 'Android']
  })
  static shareViaFacebook(message: string, image?: string, url?: string): Promise<any> { return; }


  /**
   * Shares directly to Facebook with a paste message hint
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @param pasteMessageHint {string}
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5,
    platforms: ['iOS', 'Android']
  })
  static shareViaFacebookWithPasteMessageHint(message: string, image?: string, url?: string, pasteMessageHint?: string): Promise<any> { return; }

  /**
   * Shares directly to Instagram
   * @param message {string}
   * @param image {string}
   * @returns {Promise}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  static shareViaInstagram(message: string, image: string): Promise<any> { return; }

  /**
   * Shares directly to WhatsApp
   * @param message {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 3,
    errorIndex: 4,
    platforms: ['iOS', 'Android']
  })
  static shareViaWhatsApp(message: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Shares directly to a WhatsApp Contact
   * @param receiver {string} Pass phone number on Android, and Addressbook ID (abid) on iOS
   * @param message {string} Message to send
   * @param image {string} Image to send (does not work on iOS
   * @param url {string} Link to send
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 4,
    errorIndex: 5,
    platforms: ['iOS', 'Android']
  })
  static shareViaWhatsAppToReceiver(receiver: string, message: string, image?: string, url?: string): Promise<any> { return; }

  /**
   * Share via SMS
   * @param messge {string} message to send
   * @param phoneNumber {string} Number or multiple numbers seperated by commas
   * @returns {Promise}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  static shareViaSMS(messge: string, phoneNumber: string): Promise<any> { return; }

  /**
   * Checks if you can share via email
   * @returns {Promise}
   */
  @Cordova({
    platforms: ['iOS', 'Android']
  })
  static canShareViaEmail(): Promise<any> { return; }

  /**
   * Share via Email
   * @param message {string}
   * @param subject {string}
   * @param to {string[]}
   * @param cc {string[]} Optional
   * @param bcc {string[]} Optional
   * @param files {string|string[]} Optional URL or local path to file(s) to attach
   * @returns {Promise}
   */
  @Cordova({
    platforms: ['iOS', 'Android'],
    successIndex: 6,
    errorIndex: 7
  })
  static shareViaEmail(message: string, subject: string, to: string[], cc?: string[], bcc?: string[], files?: string|string[]): Promise<any> { return; }

  /**
   * Share via AppName
   * @param appName {string} App name or package name. Examples: instagram or com.apple.social.facebook
   * @param message {string}
   * @param subject {string}
   * @param image {string}
   * @param url {string}
   * @returns {Promise}
   */
  @Cordova({
    successIndex: 5,
    errorIndex: 6,
    platforms: ['iOS', 'Android']
  })
  static shareVia(appName: string, message: string, subject?: string, image?: string, url?: string): Promise<any> { return; }
}
