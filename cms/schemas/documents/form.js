import { HiOutlineClipboardList } from 'react-icons/hi'

export default {
  name: 'form',
  title: 'Form',
  type: 'document',
  editModal: 'fullscreen',
  icon: HiOutlineClipboardList,
  fields: [
    {
      name: 'formCarryID',
      title: 'FormCarry ID',
      type: 'string',
      codegen: { required: true },
      validation: (Rule) => [Rule.required().error('Missing Name')],
    },
  ],
}
