export default {
  name: 'phoneNumber',
  title: 'Phone Number',
  type: 'string',
  validation: (Rule) =>
    Rule.regex(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
      name: 'phone number',
      invert: false,
    }),
}
