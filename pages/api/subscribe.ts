import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { email } = req.body

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Invalid email' })
  }

  try {
    const params = new URLSearchParams()

    // ✅ REQUIRED FIELDS
    params.append('email', email)
    params.append('listname', 'awlist6897043')

    // 🔥 CRITICAL AWEBER HIDDEN FIELDS (THIS FIXES YOUR ISSUE)
    params.append('<!-- AWeber Web Form Generator 3.0.1 -->
<style type="text/css">
#af-form-317058051 .af-body{font-family:Helvetica, sans-serif;font-size:16px;color:#444444;background-image:none;background-position:inherit;background-repeat:no-repeat;padding-top:10px;padding-bottom:10px;}
#af-form-317058051 .af-body .privacyPolicy{font-family:Helvetica, sans-serif;font-size:16px;color:#444444;}
#af-form-317058051 {border-style:none;border-width:1px;border-color:#CFCFCF;background-color:#FFFFFF;}
#af-form-317058051 .af-standards .af-element{padding-left:20px;padding-right:20px;}
#af-form-317058051 .af-quirksMode{padding-left:20px;padding-right:20px;}
#af-form-317058051 .af-header{font-family:Helvetica, sans-serif;font-size:16px;color:#444444;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-width:1px;background-image:none;background-position:inherit;background-repeat:no-repeat;background-color:#FFFFFF;padding-left:15px;padding-right:15px;padding-top:20px;padding-bottom:5px;}
#af-form-317058051 .af-footer{font-family:Helvetica, sans-serif;font-size:16px;color:#444444;border-top-style:none;border-right-style:none;border-bottom-style:none;border-left-style:none;border-width:1px;background-image:none;background-position:top left;background-repeat:no-repeat;background-color:#EBF0F2;padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;}
#af-form-317058051 .af-body input.text, #af-form-317058051 .af-body textarea{border-color:#D6DEE3;border-width:2px;border-style:solid;font-family:Trebuchet MS, sans-serif;font-size:16px;font-weight:normal;font-style:normal;text-decoration:none;color:#444444;background-color:#EBF0F2;}
#af-form-317058051 .af-body input.text:focus, #af-form-317058051 .af-body textarea:focus{border-style:solid;border-width:1px;border-color:#D6DEE3;background-color:#D7DDE0;}
#af-form-317058051 .af-body label.previewLabel{font-family:Helvetica, sans-serif;font-size:16px;font-weight:bold;font-style:normal;text-decoration:none;color:#444444;display:block;float:none;text-align:left;width:auto;}
#af-form-317058051 .af-body .af-textWrap{width:98%;display:block;float:none;}
#af-form-317058051 .buttonContainer input.submit{font-family:Helvetica, sans-serif;font-size:18px;font-weight:normal;font-style:normal;text-decoration:none;color:#FFFFFF;background-color:#333333;background-image:none;}
#af-form-317058051 .buttonContainer{text-align:center;}
#af-form-317058051 .af-body label.choice{font-family:inherit;font-size:inherit;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;}
#af-form-317058051 .af-body a{font-weight:normal;font-style:normal;text-decoration:underline;color:#777777;}
#af-form-317058051, #af-form-317058051 .quirksMode{width:100%;max-width:418.0px;}
#af-form-317058051.af-quirksMode{overflow-x:hidden;}
#af-form-317058051 .af-quirksMode .bodyText{padding-top:2px;padding-bottom:2px;}
#af-form-317058051{overflow:hidden;}
#af-form-317058051 button,#af-form-317058051 input,#af-form-317058051 submit,#af-form-317058051 textarea,#af-form-317058051 select,#af-form-317058051 label,#af-form-317058051 optgroup,#af-form-317058051 option {float:none;margin:0;position:static;}
#af-form-317058051 select,#af-form-317058051 label,#af-form-317058051 optgroup,#af-form-317058051 option {padding:0;}
#af-form-317058051 input,#af-form-317058051 button,#af-form-317058051 textarea,#af-form-317058051 select {font-size:100%;}
#af-form-317058051 .buttonContainer input.submit {width:auto;}
#af-form-317058051 form,#af-form-317058051 textarea,.af-form-wrapper,.af-form-close-button,#af-form-317058051 img {float:none;color:inherit;margin:0;padding:0;position:static;background-color:none;border:none;}
#af-form-317058051 div {margin:0;}
#af-form-317058051 {display:block;}
#af-form-317058051 body,#af-form-317058051 dl,#af-form-317058051 dt,#af-form-317058051 dd,#af-form-317058051 h1,#af-form-317058051 h2,#af-form-317058051 h3,#af-form-317058051 h4,#af-form-317058051 h5,#af-form-317058051 h6,#af-form-317058051 pre,#af-form-317058051 code,#af-form-317058051 fieldset,#af-form-317058051 legend,#af-form-317058051 blockquote,#af-form-317058051 th,#af-form-317058051 td { float:none;color:inherit;margin:0;padding:0;position:static;}
#af-form-317058051 p { color:inherit;}
#af-form-317058051 ul,#af-form-317058051 ol {list-style-image:none;list-style-position:outside;list-style-type:disc;padding-left:40px;}
#af-form-317058051 .bodyText p {margin:1em 0;}
#af-form-317058051 table {border-collapse:collapse;border-spacing:0;}
#af-form-317058051 fieldset {border:0;}
.af-clear{clear:both;}
.af-form{box-sizing:border-box; margin:auto; text-align:left;}
.af-element{padding-bottom:5px; padding-top:5px;}
.af-form-wrapper{text-indent: 0;}
.af-body input.submit, .af-body input.image, .af-form .af-element input.button{float:none!important;}
.af-body input.submit{white-space: inherit;}
.af-body input.text{width:100%; padding:2px!important;}
.af-body .af-textWrap{text-align:left;}
.af-element label{float:left; text-align:left;}
.lbl-right .af-element label{text-align:right;}
.af-quirksMode .af-element{padding-left: 0!important; padding-right: 0!important;}
.af-body.af-standards input.submit{padding:4px 12px;}
.af-body input.image{border:none!important;}
.af-body input.text{float:none;}
.af-element label{display:block; float:left;}
.af-header { margin-bottom:0; margin-top:0; padding:10px; }
body {
}

#af-form-317058051 {
  border-radius: 6px !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 2px;
  font-size: 16px;
}
#af-form-317058051 .af-body {

}
#af-form-317058051 .af-body .af-element {
  margin-top: 1rem !important;
  padding-top: 0;
  padding-bottom: 2px;
}
#af-form-317058051 .af-body .af-element:first-child {
  margin-top: 0 !important;
}
#af-form-317058051 .af-body label.previewLabel {
  margin-bottom: 0.25rem !important;
}
#af-form-317058051 .af-body input.text {
  border-bottom: none !important;
  border-left: none !important;
  border-right: none !important;
  border-radius: 3px !important;
  box-sizing: border-box !important;
  margin-top: 0.25rem !important;
  padding: 8px 12px !important;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}
#af-form-317058051 .af-body input.text:focus {
  outline: none;
}
#af-form-317058051 .af-body select {
  width: 100%;
}
#af-form-317058051 .af-body .af-dateWrap select {
  width: 33%;
}
#af-form-317058051 .choiceList-radio-stacked {
  margin-bottom: 1rem !important;
  width: 100% !important;
}
#af-form-317058051 .af-element-radio {
  margin: 0 !important;
}
#af-form-317058051 .af-element-radio input.radio {
  display: inline;
  height: 0;
  opacity: 0;
  overflow: hidden;
  width: 0;
}
#af-form-317058051 .af-element-radio input.radio:checked ~ label {
  font-weight: 700 !important;
}
#af-form-317058051 .af-element-radio input.radio:focus ~ label {
  box-shadow: inset 0 0 0 2px rgba(25,35,70,.25);
}
#af-form-317058051 .af-element-radio input.radio:checked ~ label:before {
  background-color: #777777;
  border-color: #d6dee3;
}
#af-form-317058051 .af-element-radio label.choice {
  border: 1px solid #d6dee3;
  border-radius: 3px !important;
  display: block !important;
  font-weight: 300 !important;
  margin: 0.5rem 0 !important;
  padding: 1rem 1rem 1rem 2rem !important;
  position: relative;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
}
#af-form-317058051 .af-element-radio label.choice:before {
  background-color: #FFF;
  border: 1px solid #d6dee3;
  border-radius: 50%;
  content: '';
  height: 0.75rem;
  margin-left: -1.3rem;
  position: absolute;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 0.75rem;
}
#af-form-317058051 .buttonContainer {
  box-sizing: border-box !important;
}
#af-form-317058051 .af-footer {
  box-shadow: inset rgba(0, 0, 0, 0.1) 0 6px 6px -6px;
  box-sizing: border-box !important;
}
#af-form-317058051 .af-footer p {
  margin: 0 !important;
}
#af-form-317058051 input.submit,
#af-form-317058051 #webFormSubmitButton {
  background-image: none;
  border: none;
  border-radius: 3px !important;
  margin-top: 0.5rem !important;
  padding: 0.6rem 2.5rem !important;
  -webkit-appearance: none;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 100% !important;
}
#af-form-317058051 input.submit:hover,
#af-form-317058051 #webFormSubmitButton:hover {
  cursor: pointer;
  opacity: 0.9;
}
#af-form-317058051 input.text {
  border-radius: 3px !important;
  margin-top: 0.5rem !important;
  padding: 0.6rem 2.5rem !important;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 100% !important;
}
#af-form-317058051 input.text:hover {
  cursor: pointer;
  opacity: 0.9;
}

.poweredBy a,
.privacyPolicy p {
  font-size: 0.75rem !important;
}

</style>
<form method="post" class="af-form-wrapper" accept-charset="UTF-8" action="https://www.aweber.com/scripts/addlead.pl"  >
<div style="display: none;">
<input type="hidden" name="meta_web_form_id" value="317058051" />
<input type="hidden" name="meta_split_id" value="" />
<input type="hidden" name="listname" value="awlist6897043" />
<input type="hidden" name="redirect" value="https://www.aweber.com/thankyou-coi.htm?m=text" id="redirect_000d484c6c2ac07fb13e1c8925a29c18" />

<input type="hidden" name="meta_adtracking" value="Mind_Sprint__Opt-In_Form" />
<input type="hidden" name="meta_message" value="1" />
<input type="hidden" name="meta_required" value="email" />

<input type="hidden" name="meta_tooltip" value="" />
</div>
<div id="af-form-317058051" class="af-form"><div id="af-header-317058051" class="af-header"><div class="bodyText"><p>&nbsp;</p></div></div>
<div id="af-body-317058051" class="af-body af-standards">
<div class="af-element">
<label class="previewLabel" for="awf_field-118187999">Email:</label>
<div class="af-textWrap"><input class="text" id="awf_field-118187999" type="email" name="email" value="" tabindex="500" onfocus=" if (this.value == '') { this.value = ''; }" onblur="if (this.value == '') { this.value='';}" />
</div><div class="af-clear"></div>
</div>
<div class="af-element buttonContainer">
<input name="submit" class="submit" type="submit" value="Submit" tabindex="501" />
<div class="af-clear"></div>
</div>
<div class="af-element privacyPolicy" style="text-align: center"><p>We respect your <a title="Privacy Policy" href="https://www.aweber.com/permission.htm" target="_blank" rel="nofollow">email privacy</a></p>
<div class="af-clear"></div>
</div>

</div>
</div>
<div style="display: none;"><img src="https://forms.aweber.com/form/displays.htm?id=zIzsDKwcDKyM" alt="" /></div>
</form>


<!-- /AWeber Web Form Generator 3.0.1 -->')
    params.append('meta_split_id', '')
    params.append('meta_adtracking', 'Mind Sprint')
    params.append('meta_message', '1')
    params.append('meta_required', 'email')

    // optional but helps consistency
    params.append('redirect', 'https://dailymindsprint.com')

    const response = await fetch('https://www.aweber.com/scripts/addlead.pl', {
      method: 'POST',
      body: params,
    })

    // 🔍 DEBUG (optional but useful)
    console.log('AWeber response status:', response.status)

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Subscribe error:', err)
    return res.status(500).json({ error: 'Failed to subscribe' })
  }
}
