module.exports = function(app){
    var views = app.views,
        actions = app.actions,
        behaviours = app.behaviours;

 function createForm(){
  
  var SiteIDLabel = new views.Label();
  var SiteIDTextbox = new views.Textbox();
  SiteIDTextbox.value.binding = '[siteID]'
  SiteIDTextbox.size.value = 20;
  SiteIDLabel.text.value = 'Site ID';
  SiteIDTextbox.maxLength.value = 18;
  SiteIDLabel.classes.value = 'fldname';





  SiteIDTextbox.classes.value = 'inp';
  SiteIDTextbox.required.value = true;

  
  SiteIDTextbox.disabled.binding = '[/fieldsDisabled]';
  
    
  SiteIDTextbox.classes.value = 'inp';
  SiteIDTextbox.required.value = true;
   
  var SiteIDLabelContainer = new views.Container();
  SiteIDLabelContainer.views.content.add([
    SiteIDLabel,
    SiteIDTextbox,
  ]);

  SiteIDLabelContainer.classes.value = 'field'
  var JobNameLabel = new views.Label();
  var JobNameTextbox = new views.Textbox();
  JobNameTextbox.value.binding = '[jobName]'
  

  JobNameTextbox.disabled.binding = '[/fieldsDisabled]';




  JobNameTextbox.size.value = 7;
  JobNameLabel.text.value = 'Job Name';
  JobNameTextbox.maxLength.value = 5;
  JobNameLabel.classes.value = 'fldname';

  JobNameTextbox.classes.value = 'inp';

  var JobNameLabelContainer = new views.Container();
  JobNameLabelContainer.views.content.add([
    JobNameLabel,
    JobNameTextbox,
  ]);

  JobNameLabelContainer.classes.value = 'field'
  
  var BasinLabel = new views.Label();
  var BasinSelect = new views.Select();
  BasinSelect.value.binding = '[basin]'
  BasinSelect.options.value = [''];
  BasinLabel.text.value = 'Basin';
  BasinLabel.classes.value = 'fldname';

  BasinSelect.classes.value = 'inp';


  var BasinLabelContainer = new views.Container();
  BasinLabelContainer.views.content.add([
    BasinLabel,
    BasinSelect,
  ]);

  BasinLabelContainer.classes.value = 'field'
  var WellfieldLabel = new views.Label();
  var WellfieldSelect = new views.Select();
  WellfieldSelect.value.binding = '[wellField]'
  WellfieldSelect.options.value = [''];
  WellfieldLabel.text.value = 'Wellfield';
  WellfieldLabel.classes.value = 'fldname';

  WellfieldSelect.classes.value = 'inp';

  var WellfieldLabelContainer = new views.Container();
  WellfieldLabelContainer.views.content.add([
    WellfieldLabel,
    WellfieldSelect,
  ]);

  WellfieldLabelContainer.classes.value = 'field';

  var RecordedByLabel = new views.Label();
  var RecordedBySelect = new views.Select();
  RecordedBySelect.value.binding = '[officer]'
  RecordedBySelect.options.value = ['CTJONES','RHECTOR','SDENNER'];
  RecordedByLabel.text.value = 'Recorded By';
  
  RecordedByLabel.classes.value = 'fldname';

  RecordedBySelect.classes.value = 'inp';

  var RecordedByLabelContainer = new views.Container();
  RecordedByLabelContainer.views.content.add([
    RecordedByLabel,
    RecordedBySelect,
  ]);

  RecordedByLabelContainer.classes.value = 'field';
    
  var DateLabel = new views.Label();
  var DateDate = new views.Textbox();
  DateDate.type.value = 'date'
  DateDate.value.binding = '[visitDate]'
  DateLabel.text.value = 'Field Visit Date';
  DateLabel.classes.value = 'fldname';

  DateDate.disabled.binding = '[/fieldsDisabled]';
  DateDate.classes.value = 'inp';

  var DateLabelContainer = new views.Container();
  DateLabelContainer.views.content.add([
    DateLabel,
    DateDate,
  ]);

  DateLabelContainer.classes.value = 'field';


  var TimeLabel = new views.Label();
  var TimeTextbox = new views.Textbox();
  TimeTextbox.value.binding = '[visitTime]'
  TimeTextbox.size.value = 6;
  TimeLabel.text.value = 'Time';
  TimeTextbox.maxLength.value = 4;
  
  TimeTextbox.disabled.binding = '[/fieldsDisabled]';
  
  var TimePostLabel = new views.Label();
  TimePostLabel.text.value = '(hhmm)';
  TimePostLabel.classes.value = 'postlab';

  TimeLabel.classes.value = 'fldname';

  TimeTextbox.classes.value = 'inp';

  var TimeLabelContainer = new views.Container();
  TimeLabelContainer.views.content.add([
    TimeLabel,
    TimeTextbox,
    TimePostLabel,
  ]);

  TimeLabelContainer.classes.value = 'field';



  var FreeGasReadingMethaneLabel = new views.Label();
  var FreeGasReadingMethaneTextbox = new views.Textbox();
  FreeGasReadingMethaneTextbox.value.binding = '[freeGas]'
  FreeGasReadingMethaneTextbox.size.value = 17;
  FreeGasReadingMethaneLabel.text.value = 'Free Gas Reading (Methane)';
  FreeGasReadingMethaneTextbox.maxLength.value = 15;
  var FreeGasReadingMethanePostLabel = new views.Label();
  FreeGasReadingMethanePostLabel.text.value = '(ml/g)';
  FreeGasReadingMethanePostLabel.classes.value = 'postlab';
  
  FreeGasReadingMethaneTextbox.disabled.binding = '[/fieldsDisabled]';
  
  FreeGasReadingMethaneLabel.classes.value = 'fldname';

  FreeGasReadingMethaneTextbox.classes.value = 'inp';

  var FreeGasReadingMethaneLabelContainer = new views.Container();
  FreeGasReadingMethaneLabelContainer.views.content.add([
    FreeGasReadingMethaneLabel,
    FreeGasReadingMethaneTextbox,
    FreeGasReadingMethanePostLabel,
  ]);

  FreeGasReadingMethaneLabelContainer.classes.value = 'field'


  
  var WellTypeLabel = new views.Label();
  WellTypeLabel.text.value = 'Well Type';
  WellTypeLabel.classes.value = 'fldname';
  
  var WellTypeSelect = new views.Select();
  WellTypeSelect.classes.value = 'inp';
  WellTypeSelect.value.binding = '[wellType]'
  WellTypeSelect.options.value = ['Monitoring','Extraction','Other'];
   
  var WellTypeLabelContainer = new views.Container();
  WellTypeLabelContainer.views.content.add([
    WellTypeLabel,
    WellTypeSelect
  ]);

  var WellMaterialLabel = new views.Label();
  WellMaterialLabel.text.value = 'Well Material';
  WellMaterialLabel.classes.value = 'fldname';

  var WellMaterialSelect = new views.Select();
  WellMaterialSelect.classes.value = 'inp';
  WellMaterialSelect.value.binding = '[wellMaterial]'
  WellMaterialSelect.options.value = ['PVC','Steel','Other'];
    
  var WellMaterialLabelContainer = new views.Container();
  WellMaterialLabelContainer.views.content.add([
    WellMaterialLabel,
    WellMaterialSelect
  ]);

  
  var PurgeSetupLabel = new views.Label();
  PurgeSetupLabel.text.value = 'Purge Setup';
  PurgeSetupLabel.classes.value = 'head3';

  var PurgeSetupLabelContainer = new views.Container();
  PurgeSetupLabelContainer.views.content.add([
    PurgeSetupLabel,
  ]);

  PurgeSetupLabelContainer.classes.value = 'field';

  var WellHeadConditionLabel = new views.Label();
  var WellHeadConditionTextbox = new views.Textbox();
  WellHeadConditionTextbox.value.binding = '[wellHeadCondition]'
  WellHeadConditionTextbox.size.value = 32;
  WellHeadConditionLabel.text.value = 'Well Head Condition';
  WellHeadConditionTextbox.maxLength.value = 60;
  WellHeadConditionLabel.classes.value = 'fldname';

  WellHeadConditionTextbox.disabled.binding = '[/fieldsDisabled]';
  
  WellHeadConditionTextbox.classes.value = 'inp';

  var WellHeadConditionLabelContainer = new views.Container();
  WellHeadConditionLabelContainer.views.content.add([
    WellHeadConditionLabel,
    WellHeadConditionTextbox,
  ]);

  WellHeadConditionLabelContainer.classes.value = 'field';

  var WaterLevelDepthLabel = new views.Label();
  var WaterLevelDepthTextbox = new views.Textbox();

  WaterLevelDepthTextbox.disabled.binding = '[/fieldsDisabled]';
  


  WaterLevelDepthTextbox.value.binding = '[waterLevel]'
  WaterLevelDepthTextbox.size.value = 12;
  WaterLevelDepthLabel.text.value = 'Water Level Depth ';
  WaterLevelDepthTextbox.maxLength.value = 15;
  var WaterLevelDepthPostLabel = new views.Label();
  WaterLevelDepthPostLabel.text.value = '(WL in m BTOC)';
  WaterLevelDepthPostLabel.classes.value = 'postlab';

  WaterLevelDepthLabel.classes.value = 'fldname';
  WaterLevelDepthTextbox.classes.value = 'inp';

  var WaterLevelDepthLabelContainer = new views.Container();
  WaterLevelDepthLabelContainer.views.content.add([
    WaterLevelDepthLabel,
    WaterLevelDepthTextbox,
    WaterLevelDepthPostLabel,
  ]);
  WaterLevelDepthLabelContainer.classes.value = 'field';

  var MeasurementPointDescriptionLabel = new views.Label();
  var MeasurementPointDescriptionTextbox = new views.Textbox();

  MeasurementPointDescriptionTextbox.disabled.binding = '[/fieldsDisabled]';
  


  MeasurementPointDescriptionTextbox.value.binding = '[measPointDesc]'
  MeasurementPointDescriptionTextbox.size.value = 62;
  MeasurementPointDescriptionLabel.text.value = 'Measurement Point Description';
  MeasurementPointDescriptionTextbox.maxLength.value = 60;
  MeasurementPointDescriptionLabel.classes.value = 'fldname';

  MeasurementPointDescriptionTextbox.classes.value = 'inp';
  
  var MeasurementPointDescriptionLabelContainer = new views.Container();
  MeasurementPointDescriptionLabelContainer.views.content.add([
    MeasurementPointDescriptionLabel,
    MeasurementPointDescriptionTextbox,
  ]);

  MeasurementPointDescriptionLabelContainer.classes.value = 'field';

  var TotalDepthofWellLabel = new views.Label();
  var TotalDepthofWellTextbox = new views.Textbox();

  TotalDepthofWellTextbox.disabled.binding = '[/fieldsDisabled]';
  


  TotalDepthofWellTextbox.value.binding = '[totalDepth]'
  TotalDepthofWellLabel.text.value = 'Total Depth of Well ';
  var TotalDepthofWellPostLabel = new views.Label();
  TotalDepthofWellPostLabel.text.value = '(TD in m BTOC)';
  TotalDepthofWellPostLabel.classes.value = 'postlab';

  TotalDepthofWellLabel.classes.value = 'fldname';

  TotalDepthofWellTextbox.classes.value = 'inp';

  var TotalDepthofWellLabelContainer = new views.Container();
  TotalDepthofWellLabelContainer.views.content.add([
    TotalDepthofWellLabel,
    TotalDepthofWellTextbox,
    TotalDepthofWellPostLabel,
  ]);
 
  TotalDepthofWellLabelContainer.classes.value = 'field'
  var WellDiameterLabel = new views.Label();
  var WellDiameterTextbox = new views.Textbox();

  WellDiameterTextbox.disabled.binding = '[/fieldsDisabled]';


  WellDiameterTextbox.value.binding = '[wellDiam]'
  WellDiameterTextbox.size.value = 17;
  WellDiameterLabel.text.value = 'Well Diameter ';
  WellDiameterTextbox.maxLength.value = 15;
  var WellDiameterPostLabel = new views.Label();
  WellDiameterPostLabel.text.value = '(D in mm)';
  WellDiameterPostLabel.classes.value = 'postlab';

  WellDiameterLabel.classes.value = 'fldname';
  WellDiameterTextbox.classes.value = 'inp';

  var WellDiameterLabelContainer = new views.Container();
  WellDiameterLabelContainer.views.content.add([
    WellDiameterLabel,
    WellDiameterTextbox,
    WellDiameterPostLabel,
  ]);

  WellDiameterLabelContainer.classes.value = 'field'
  

  var BailerTypeLabel = new views.Label();
  BailerTypeLabel.text.value = 'Bailer Type';
  BailerTypeLabel.classes.value = 'fldname';

  var BailerTypeSelect = new views.Select();
  BailerTypeSelect.classes.value = 'inp';
  BailerTypeSelect.value.binding = '[bailerType]'
  BailerTypeSelect.options.value = ['PVC','Steel','Teflon','Other'];


  var BailerTypeLabelContainer = new views.Container();
  BailerTypeLabelContainer.views.content.add([
    BailerTypeLabel,
    BailerTypeSelect
  ]);


  var PumpTypeLabel = new views.Label();
  PumpTypeLabel.text.value = 'Pump Type';
  PumpTypeLabel.classes.value = 'fldname';

  var PumpTypeSelect = new views.Select();
  PumpTypeSelect.classes.value = 'inp';
  PumpTypeSelect.value.binding = '[pumpType]'
  PumpTypeSelect.options.value = ['Submersible','Bladder','Other'];
    
  var PumpTypeLabelContainer = new views.Container();
  PumpTypeLabelContainer.views.content.add([
    PumpTypeLabel,
    PumpTypeSelect,
  ]);

  var OtherLabel = new views.Label();
  var OtherRadio = new views.Radio();
  OtherRadio.value.binding = '[PUMPTTEST_COMMENTS]'
  OtherLabel.text.value = 'Other';
  OtherLabel.classes.value = 'fldname';

  OtherRadio.classes.value = 'inp';

  var OtherLabelContainer = new views.Container();
  OtherLabelContainer.views.content.add([
    OtherLabel,
    OtherRadio,
  ]);

  OtherLabelContainer.classes.value = 'field'
  var NotesLabel = new views.Label();
  var NotesTextarea = new views.Textarea();
  NotesTextarea.value.binding = '[PUMPTTEST_COMMENTS]'
  NotesLabel.text.value = 'Notes';
  NotesLabel.classes.value = 'fldname';

  NotesTextarea.classes.value = 'textarea';

  var NotesLabelContainer = new views.Container();
  NotesLabelContainer.views.content.add([
    NotesLabel,
    NotesTextarea,
  ]);

  NotesLabelContainer.classes.value = 'field'
 
  var DepthLabel = new views.Label();
  var DepthTextbox = new views.Textbox();
  DepthTextbox.disabled.binding = '[/fieldsDisabled]';
  DepthLabel.text.value = 'Pump Intake Depth';
  DepthLabel.classes.value = 'fldname';
  
  DepthTextbox.value.binding = '[PUMPTEST_PUMPDEPTH]'
  DepthTextbox.size.value = 8;
  DepthTextbox.maxLength.value = 6;
  DepthTextbox.classes.value = 'inp';
  
  var DepthPostLabel = new views.Label();
  DepthPostLabel.text.value = '(m BTOC)';
  DepthPostLabel.classes.value = 'postlab';

  var DepthLabelContainer = new views.Container();
  DepthLabelContainer.views.content.add([
    DepthLabel,
    DepthTextbox,
    DepthPostLabel,
  ]);

  DepthLabelContainer.classes.value = 'field'
  var FieldParameterMeasurementsLabel = new views.Label();
  var FieldParameterMeasurementsLabel = new views.Label();
  FieldParameterMeasurementsLabel.text.value = 'Field Parameter Measurements';
  FieldParameterMeasurementsLabel.classes.value = 'fldname';

  FieldParameterMeasurementsLabel.classes.value = 'head3';

  var FieldParameterMeasurementsLabelContainer = new views.Container();
  FieldParameterMeasurementsLabelContainer.views.content.add([
    FieldParameterMeasurementsLabel,
    FieldParameterMeasurementsLabel,
  ]);

  FieldParameterMeasurementsLabelContainer.classes.value = 'field'
  var TimeLabel = new views.Label();
  var TimeTextbox = new views.Textbox();
  TimeTextbox.disabled.binding = '[/fieldsDisabled]';
  TimeTextbox.value.binding = '[PUMPTEST_TIME]'
  TimeTextbox.size.value = 6;
  TimeLabel.text.value = 'Time';
  TimeTextbox.maxLength.value = 4;
  var TimePostLabel = new views.Label();
  TimePostLabel.text.value = '(hhmm)';
  TimePostLabel.classes.value = 'postlab';

  TimeLabel.classes.value = 'fldname';

  TimeTextbox.classes.value = 'inp';

  var TimeLabelContainer = new views.Container();
  TimeLabelContainer.views.content.add([
    TimeLabel,
    TimeTextbox,
    TimePostLabel,
  ]);

  TimeLabelContainer.classes.value = 'field'
  var VolumePurgedLabel = new views.Label();
  var VolumePurgedTextbox = new views.Textbox();
  VolumePurgedTextbox.disabled.binding = '[/fieldsDisabled]';
  VolumePurgedTextbox.value.binding = '[PUMPTEST_SPARE3]'
  VolumePurgedLabel.text.value = 'Volume Purged';
  var VolumePurgedPostLabel = new views.Label();
  VolumePurgedPostLabel.text.value = '(L)';
  VolumePurgedPostLabel.classes.value = 'postlab';

  VolumePurgedLabel.classes.value = 'fldname';

  VolumePurgedTextbox.classes.value = 'inp';

  var VolumePurgedLabelContainer = new views.Container();
  VolumePurgedLabelContainer.views.content.add([
    VolumePurgedLabel,
    VolumePurgedTextbox,
    VolumePurgedPostLabel,
  ]);

  VolumePurgedLabelContainer.classes.value = 'field'
  var DOLabel = new views.Label();
  var DOTextbox = new views.Textbox();
  DOTextbox.disabled.binding = '[/fieldsDisabled]';
  //DOTextbox.value.binding = '[RESULTS_VALUE | RESULTS_VARIABLE = 110]'
  DOTextbox.value.binding = '[dissolvedOx]'
  DOTextbox.size.value = 17;
  DOLabel.text.value = 'DO ';
  DOTextbox.maxLength.value = 15;
  var DOPostLabel = new views.Label();
  DOPostLabel.text.value = '(mg/L)';
  DOPostLabel.classes.value = 'postlab';

  DOLabel.classes.value = 'fldname';

  DOTextbox.classes.value = 'inp';

  var DOLabelContainer = new views.Container();
  DOLabelContainer.views.content.add([
    DOLabel,
    DOTextbox,
    DOPostLabel,
  ]);

  DOLabelContainer.classes.value = 'field'
  var DOppmLabel = new views.Label();
  var DOppmTextbox = new views.Textbox();
  DOppmTextbox.disabled.binding = '[/fieldsDisabled]';
  DOppmTextbox.value.binding = '[dissolvedOxPPM]'
  DOppmTextbox.size.value = 17;
  DOppmLabel.text.value = 'DO ppm';
  DOppmTextbox.maxLength.value = 15;
  var DOppmPostLabel = new views.Label();
  DOppmPostLabel.text.value = '(ppm)';
  DOppmPostLabel.classes.value = 'postlab';

  DOppmLabel.classes.value = 'fldname';

  DOppmTextbox.classes.value = 'inp';

  var DOppmLabelContainer = new views.Container();
  DOppmLabelContainer.views.content.add([
    DOppmLabel,
    DOppmTextbox,
    DOppmPostLabel,
  ]);

  DOppmLabelContainer.classes.value = 'field'
  var ElectricalCondutivitiyLabel = new views.Label();
  var ElectricalCondutivitiyTextbox = new views.Textbox();
  ElectricalCondutivitiyTextbox.disabled.binding = '[/fieldsDisabled]';
  ElectricalCondutivitiyTextbox.value.binding = '[EC]'
  ElectricalCondutivitiyTextbox.size.value = 17;
  ElectricalCondutivitiyLabel.text.value = 'Electrical Condutivitiy ';
  ElectricalCondutivitiyTextbox.maxLength.value = 15;
  var ElectricalCondutivitiyPostLabel = new views.Label();
  ElectricalCondutivitiyPostLabel.text.value = '(mS/cm)';
  ElectricalCondutivitiyPostLabel.classes.value = 'postlab';

  ElectricalCondutivitiyLabel.classes.value = 'fldname';

  ElectricalCondutivitiyTextbox.classes.value = 'inp';

  var ElectricalCondutivitiyLabelContainer = new views.Container();
  ElectricalCondutivitiyLabelContainer.views.content.add([
    ElectricalCondutivitiyLabel,
    ElectricalCondutivitiyTextbox,
    ElectricalCondutivitiyPostLabel,
  ]);

  ElectricalCondutivitiyLabelContainer.classes.value = 'field'
  
  
  var ElectricalCondutivitiy2Label = new views.Label();
  var ElectricalCondutivitiy2Textbox = new views.Textbox();
  ElectricalCondutivitiy2Textbox.disabled.binding = '[/fieldsDisabled]';
  
  ElectricalCondutivitiy2Textbox.value.binding = '[EC2]'
  ElectricalCondutivitiy2Textbox.size.value = 17;
  ElectricalCondutivitiy2Label.text.value = 'Electrical Condutivitiy ';
  ElectricalCondutivitiy2Textbox.maxLength.value = 15;
  var ElectricalCondutivitiy2PostLabel = new views.Label();
  ElectricalCondutivitiy2PostLabel.text.value = '(\xB5s per cm)';
  ElectricalCondutivitiy2PostLabel.classes.value = 'postlab';

  ElectricalCondutivitiy2Label.classes.value = 'fldname';

  ElectricalCondutivitiy2Textbox.classes.value = 'inp';

  var ElectricalCondutivitiy2LabelContainer = new views.Container();
  ElectricalCondutivitiy2LabelContainer.views.content.add([
    ElectricalCondutivitiyLabel,
    ElectricalCondutivitiyTextbox,
    ElectricalCondutivitiyPostLabel,
  ]);

  ElectricalCondutivitiy2LabelContainer.classes.value = 'field'
  var pHLabel = new views.Label();
  var pHTextbox = new views.Textbox();
  pHTextbox.disabled.binding = '[/fieldsDisabled]';
  pHTextbox.value.binding = '[pH]'
  pHTextbox.size.value = 17;
  pHLabel.text.value = 'pH';
  pHTextbox.maxLength.value = 15;
  pHLabel.classes.value = 'fldname';

  pHTextbox.classes.value = 'inp';

  var pHLabelContainer = new views.Container();
  pHLabelContainer.views.content.add([
    pHLabel,
    pHTextbox,
  ]);

  pHLabelContainer.classes.value = 'field'
  var RedOxLabel = new views.Label();
  var RedOxTextbox = new views.Textbox();
  RedOxTextbox.disabled.binding = '[/fieldsDisabled]';
  RedOxTextbox.value.binding = '[redox]'
  RedOxTextbox.size.value = 17;
  RedOxLabel.text.value = 'RedOx ';
  RedOxTextbox.maxLength.value = 15;
  var RedOxPostLabel = new views.Label();
  RedOxPostLabel.text.value = '(mV)';
  RedOxPostLabel.classes.value = 'postlab';

  RedOxLabel.classes.value = 'fldname';

  RedOxTextbox.classes.value = 'inp';

  var RedOxLabelContainer = new views.Container();
  RedOxLabelContainer.views.content.add([
    RedOxLabel,
    RedOxTextbox,
    RedOxPostLabel,
  ]);

  RedOxLabelContainer.classes.value = 'field'
  var TempLabel = new views.Label();
  var TempTextbox = new views.Textbox();
  TempTextbox.disabled.binding = '[/fieldsDisabled]';
  TempTextbox.value.binding = '[temp]'
  TempTextbox.size.value = 17;
  TempLabel.text.value = 'Temp';
  TempTextbox.maxLength.value = 15;
  var TempPostLabel = new views.Label();
  TempPostLabel.text.value = '(\xB0C)';
  TempPostLabel.classes.value = 'postlab';

  TempLabel.classes.value = 'fldname';

  TempTextbox.classes.value = 'inp';

  var TempLabelContainer = new views.Container();
  TempLabelContainer.views.content.add([
    TempLabel,
    TempTextbox,
    TempPostLabel,
  ]);

  TempLabelContainer.classes.value = 'field'
  var TurbidityLabel = new views.Label();
  var TurbidityTextbox = new views.Textbox();
  TurbidityTextbox.disabled.binding = '[/fieldsDisabled]';
  
  TurbidityTextbox.value.binding = '[turb]'
  TurbidityTextbox.size.value = 17;
  TurbidityLabel.text.value = 'Turbidity ';
  TurbidityTextbox.maxLength.value = 15;
  var TurbidityPostLabel = new views.Label();
  TurbidityPostLabel.text.value = '(NTU)';
  TurbidityPostLabel.classes.value = 'postlab';

  TurbidityLabel.classes.value = 'fldname';

  TurbidityTextbox.classes.value = 'inp';

  var TurbidityLabelContainer = new views.Container();
  TurbidityLabelContainer.views.content.add([
    TurbidityLabel,
    TurbidityTextbox,
    TurbidityPostLabel,
  ]);

  TurbidityLabelContainer.classes.value = 'field'
  var MeasurementCommentsLabel = new views.Label();
  var MeasurementCommentsTextarea = new views.Textarea();
  MeasurementCommentsTextarea.value.binding = '[SAMPLE_COMMNT]'
  MeasurementCommentsLabel.text.value = 'Measurement Comments';
  MeasurementCommentsLabel.classes.value = 'fldname';

  MeasurementCommentsTextarea.classes.value = 'textarea';

  var MeasurementCommentsLabelContainer = new views.Container();
  MeasurementCommentsLabelContainer.views.content.add([
    MeasurementCommentsLabel,
    MeasurementCommentsTextarea,
  ]);

  MeasurementCommentsLabelContainer.classes.value = 'field';
  
  var DischargeLabel = new views.Label();
  DischargeLabel.text.value = 'Discharge';
  DischargeLabel.classes.value = 'head3';

  var DischargeLabelContainer = new views.Container();
  DischargeLabelContainer.views.content.add([
    DischargeLabel,
  ]);
  DischargeLabelContainer.classes.value = 'field';
      
  var DischargewaterdisposalLabel = new views.Label();
  var DischargewaterdisposalLabel = new views.Label();
  DischargewaterdisposalLabel.text.value = 'Discharge water disposal';
  DischargewaterdisposalLabel.classes.value = 'fldname';

  var DischargeSelect = new views.Select();
  DischargeSelect.classes.value = 'inp';
  DischargeSelect.value.binding = '[SAMPLE_SPARE2]'
  DischargeSelect.options.value = ['Drums','Sanitary','Sewer Storm','Storm','Other'];
  
  var DischargewaterdisposalLabelContainer = new views.Container();
  DischargewaterdisposalLabelContainer.views.content.add([
    DischargewaterdisposalLabel,
    DischargeSelect
  ]);

  DischargewaterdisposalLabelContainer.classes.value = 'field'
    
  var DischargeCommentLabel = new views.Label();
  var OtherCommentTextarea = new views.Textarea();
  OtherCommentTextarea.value.binding = '[SAMPLE_COMMNT]';
  DischargeCommentLabel.text.value = 'Discharge Comment';
  DischargeCommentLabel.classes.value = 'fldname';

  OtherCommentTextarea.classes.value = 'textarea';

  var OtherCommentLabelContainer = new views.Container();
  OtherCommentLabelContainer.views.content.add([
    DischargeCommentLabel,
    OtherCommentTextarea,
  ]);
  OtherCommentLabelContainer.classes.value = 'field'
  
  var WellSamplingLabel = new views.Label();
  WellSamplingLabel.text.value = 'Well Sampling ';
  WellSamplingLabel.classes.value = 'head3';

  var WellSamplingLabelContainer = new views.Container();
  WellSamplingLabelContainer.views.content.add([
    WellSamplingLabel,
  ]);
  WellSamplingLabelContainer.classes.value = 'field'
  
  var SampleTakenLabel = new views.Label();
  SampleTakenLabel.text.value = 'Sample Taken';
  SampleTakenLabel.classes.value = 'fldname';

  var SampleTakenSelect = new views.Select();
  SampleTakenSelect.value.binding = '[AREASMT_SAMPFLAG]';
  SampleTakenSelect.options.value = ['Yes','No'];
  SampleTakenSelect.classes.value = 'inp';
   
  var SampleTakenLabelContainer = new views.Container();
  SampleTakenLabelContainer.views.content.add([
    SampleTakenLabel,
    SampleTakenSelect
  ]);
  SampleTakenLabelContainer.classes.value = 'field'
  
  var SamplingMethodLabel = new views.Label();
  SamplingMethodLabel.text.value = 'Sampling Method';
  SamplingMethodLabel.classes.value = 'fldname';

  var SamplingMethodSelect = new views.Select();
  SamplingMethodSelect.value.binding = '[SAMPLES_COLLMETH,SAMPLES_TEST]';
  SamplingMethodSelect.options.value = ['AI','AS','PA'];
  SamplingMethodSelect.classes.value = 'inp';

  var SamplingMethodLabelContainer = new views.Container();
  SamplingMethodLabelContainer.views.content.add([
    SamplingMethodLabel,
    SamplingMethodSelect,
  ]);

  SamplingMethodLabelContainer.classes.value = 'field'
  var BOTTLENUMBERLabel = new views.Label();
  var BOTTLENUMBERTextbox = new views.Textbox();
  BOTTLENUMBERTextbox.disabled.binding = '[/fieldsDisabled]';
  BOTTLENUMBERTextbox.value.binding = '[bottle]';
  BOTTLENUMBERTextbox.size.value = 22;
  BOTTLENUMBERLabel.text.value = 'Bottle Number';
  BOTTLENUMBERTextbox.maxLength.value = 20;
  BOTTLENUMBERLabel.classes.value = 'fldname';

  BOTTLENUMBERTextbox.classes.value = 'inp';

  var BOTTLENUMBERLabelContainer = new views.Container();
  BOTTLENUMBERLabelContainer.views.content.add([
    BOTTLENUMBERLabel,
    BOTTLENUMBERTextbox,
  ]);

  BOTTLENUMBERLabelContainer.classes.value = 'field';
  var SAMPLENUMBERLabel = new views.Label();
  var SAMPLENUMBERTextbox = new views.Textbox();
  SAMPLENUMBERTextbox.disabled.binding = '[/fieldsDisabled]';
  SAMPLENUMBERTextbox.value.binding = '[sampnum]';
  SAMPLENUMBERTextbox.size.value = 32;
  SAMPLENUMBERLabel.text.value = 'Sample Number';
  SAMPLENUMBERTextbox.maxLength.value = 30;
  SAMPLENUMBERLabel.classes.value = 'fldname';

  SAMPLENUMBERTextbox.disabled.binding = '[/fieldsDisabled]';
  SAMPLENUMBERTextbox.classes.value = 'inp';

  var SAMPLENUMBERLabelContainer = new views.Container();
  SAMPLENUMBERLabelContainer.views.content.add([
    SAMPLENUMBERLabel,
    SAMPLENUMBERTextbox,
  ]);
  SAMPLENUMBERLabelContainer.classes.value = 'field'
  
  var BOTTLETYPELabel = new views.Label();
  BOTTLETYPELabel.text.value = 'Bottle Type';
  BOTTLETYPELabel.classes.value = 'fldname';

  var BOTTLETYPESelect = new views.Select();
  BOTTLETYPESelect.value.binding = '[SAMPLES_SPARE2]';
  BOTTLETYPESelect.options.value = ['Amber Glass','Plastic'];
  BOTTLETYPESelect.classes.value = 'inp';

  var BOTTLETYPELabelContainer = new views.Container();
  BOTTLETYPELabelContainer.views.content.add([
    BOTTLETYPELabel,
    BOTTLETYPESelect,
  ]);
  BOTTLETYPELabelContainer.classes.value = 'field'
  
  var SampleTypeLabel = new views.Label();
  SampleTypeLabel.text.value = 'Sample Type';
  SampleTypeLabel.classes.value = 'fldname';
  
  var SampleTypeSelect = new views.Select();
  SampleTypeSelect.disabled.binding = '[/fieldsDisabled]';
  
  SampleTypeSelect.value.binding = '[samptype]';
  SampleTypeSelect.options.value = ['Primary','Dupe1','Dupe3','Trip1','Trip2','Trip3','Rinsate1','Rinsate2','Rinsate3','Trip Blank','Trip Spike'];
  SampleTypeSelect.classes.value = 'inp';
  
  var SampleTypeLabelContainer = new views.Container();
  SampleTypeLabelContainer.views.content.add([
    SampleTypeLabel,
    SampleTypeSelect
  ]);

  SampleTypeLabelContainer.classes.value = 'field'
    
  var SampleCommentLabel = new views.Label();
  var SampleCommentTextarea = new views.Textarea();
  SampleCommentTextarea.disabled.binding = '[/fieldsDisabled]';
  SampleCommentTextarea.value.binding = '[samples_commnt]';
  SampleCommentLabel.text.value = 'Sample Comment';
  SampleCommentLabel.classes.value = 'fldname';

  SampleCommentTextarea.classes.value = 'textarea';

  var SampleCommentLabelContainer = new views.Container();
  SampleCommentLabelContainer.views.content.add([
    SampleCommentLabel,
    SampleCommentTextarea,
  ]);
  
  SampleCommentLabelContainer.classes.value = 'field';
  
   var formFields = new views.Form();
    formFields.views.content.add([
      SiteIDLabelContainer,
      JobNameLabelContainer,
      //BasinLabelContainer,
      //WellfieldLabelContainer,
      RecordedByLabelContainer,
      DateLabelContainer,
      TimeLabelContainer,
      FreeGasReadingMethaneLabelContainer,
      WellTypeLabelContainer,
      WellMaterialLabelContainer,
      PurgeSetupLabelContainer,
      WellHeadConditionLabelContainer,
      WaterLevelDepthLabelContainer,
      MeasurementPointDescriptionLabelContainer,
      TotalDepthofWellLabelContainer,
      WellDiameterLabelContainer,
      BailerTypeLabelContainer,
      PumpTypeLabelContainer,
      NotesLabelContainer,
      DepthLabelContainer,
      FieldParameterMeasurementsLabelContainer,
      TimeLabelContainer,
      VolumePurgedLabelContainer,
      DOLabelContainer,
      DOppmLabelContainer,
      ElectricalCondutivitiyLabelContainer,
      ElectricalCondutivitiy2LabelContainer,
      pHLabelContainer,
      RedOxLabelContainer,
      TempLabelContainer,
      TurbidityLabelContainer,
      MeasurementCommentsLabelContainer,
      DischargeLabelContainer,
      DischargewaterdisposalLabelContainer,
      OtherCommentLabelContainer,
      WellSamplingLabelContainer,
      SampleTakenLabelContainer,
      SamplingMethodLabelContainer,
      BOTTLENUMBERLabelContainer,
      SAMPLENUMBERLabelContainer,
      BOTTLETYPELabelContainer,
      SampleTypeLabelContainer,
      SampleCommentLabelContainer
    ]);
      
    var finishEditing = new actions.Push();
    finishEditing.source.value = false;
    finishEditing.target.binding = '[/data]';

    formFields.actions.submit = [finishEditing];
    return formFields;
}

function formActions(){    
    
    var pushNewData = new actions.Push();
    pushNewData.source.binding = '[/data]'; //data is in scope from ajax action success
    pushNewData.target.binding = '[/data]';
    
    //var alert = new actions.Alert();
    //alert.text.value = 'Saved';

    var saveData = new actions.Ajax();
    saveData.method.value = 'POST';
    saveData.source.binding = '[]';
    saveData.actions.success = [pushNewData, clearNewData];  
    
    var submitButton = new views.Button();
    submitButton.text.value = 'Submit';
    //submitButton.actions.click = [pushNewData];
    submitButton.actions.click = [saveData];

    return submitButton;
    
    var clearNewData = new actions.Remove();
    clearNewData.target.binding = '[]';

    //var form = new views.Form();
    var page = new views.Container();
    page.views.content.add([
        createControls(),
        createForm(), 
        submitButton
    ]);
    
    return page;  
}         

function createControls(){
  var controlsTemplate = new views.Container(),
      backButton = new views.Button(),
      newRecordButton = new views.Button(),
      editRecordButton = new views.Button(),
      cancelButton = new views.Button(),
      saveRecordButton = new views.Button(),
      nextButton = new views.Button(),
      searchBox = new views.Textbox(),
      deleteRecordButton = new views.Button(),
      enableForm = new actions.Set(),
      disableForm = new actions.Set(),
      addNewRecord = new actions.Push(),
      saveRecord = new actions.Push(),
      saveExport = new actions.Push(),
      addRecordIfNotEmpty = new actions.Conditional(),
      deleteRecord = new actions.Remove();


    backButton.text.value = '<- Back';
    newRecordButton.text.value = 'New Record';
    editRecordButton.text.value = 'Edit';
    cancelButton.text.value = 'Cancel';
    saveRecordButton.text.value = 'Save';
    nextButton.text.value = 'Next ->';
    searchBox.placeholder.value = 'Search...';
    deleteRecordButton.text.value = 'Delete';

    enableForm.source.value = 'false' ;
    enableForm.target.binding = '[/fieldsDisabled]';

    disableForm.source.value = 'true' ;
    disableForm.target.binding = '[/fieldsDisabled]';

    deleteRecordButton.actions.click = [deleteRecord];

    deleteRecord.target.binding = '[]';

    editRecordButton.actions.click = [enableForm];
    newRecordButton.actions.click = [enableForm];

    //saveRecord.source.binding = '(object "record" (? (filter [] {fields fields.value}) (filter [/ui] {fields fields.table_field}) ) )';
    //// returns a list of all todos that match the current filter.
//var todosInViewBinding = '(? (= [/filter] "all") [/todos] (? (= [/filter] "completed") (filter [/todos] {todo todo.completed}) (filter [/todos] {todo (! todo.completed)})))';


    saveRecord.source.binding = '[data]';

/*
filters:[
        {
            label: "All",
            filter: 'all'
        },
        {
            label: "Active",
            filter: 'active'
        },
        {
*/  


    saveRecord.target.binding = '[/data]';
    
    //saveRecord.source.binding = '(object "records" (? (filter [] {SITE_STATION} )))';
    //saveExport.target.binding =  '[/export]';

    cancelButton.actions.click = [disableForm];
    saveRecordButton.actions.click = [saveRecord,disableForm];

    controlsTemplate.views.content.add([
        newRecordButton,
        editRecordButton,
        saveRecordButton,
        backButton,
        nextButton,
        cancelButton,   
        //searchBox,
        deleteRecordButton
    ]);

    controlsTemplate.classes.value = 'controls';
    return controlsTemplate;

}
 
function createTitle(){
  var formTitle = new views.Label();
  formTitle.classes.value = 'title';
  formTitle.text.value = 'Ground Water Monitoring Form';
  return formTitle;
}

function createAppBehaviours(){
    var onLoadBehaviour = new behaviours.PageLoad(),
        retieveLocalData = new actions.BrowserStorage(),
        persistDataOnChange = new behaviours.ModelChange(),
        persistData = new actions.BrowserStorage(),
        disable = new actions.Set(),
        updateDisabled = new actions.Set(),
        setActiveRecord = new actions.Set();

    var activeRecord = 0;

    disable.source.value = 'true';
    disable.target.binding = '[/fieldsDisabled]';

    retieveLocalData.source.value = 'localData';
    retieveLocalData.method.value = 'get';
    retieveLocalData.target.binding = '[/data]';

    onLoadBehaviour.actions.load = [disable,retieveLocalData];

    persistData.source.binding = '[/data]';
    persistData.method.value = 'set';
    persistData.target.value = 'localData';

    persistDataOnChange.watch.binding = '[/localData]';
    persistDataOnChange.actions.change = [persistData];

    return [
        onLoadBehaviour,
        persistDataOnChange
    ];
}
 
function createView(){
    var appView = new views.Container();
    appView.views.content.add([
      createTitle(),
      createControls(),
      createForm()
    ]);
    appView.behaviours = createAppBehaviours();
    appView.classes.value = 'app';
    return appView;
    
}

  return createView;
}