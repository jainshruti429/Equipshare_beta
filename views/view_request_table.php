<%- include admin_header.ejs %>
    
    
    <!--side bar code here-->
    
    <div class="container-fluid">
    <div class="row">
        
       <%- include admin_sidebar.ejs %>
        
        <!--main content begin here-->
        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12" style="padding:0">
        <div class="main-content">
				<div class="main-content-inner">
					<div class="breadcrumbs ace-save-state" id="breadcrumbs">
						<ul class="breadcrumb">
							<li>
								<i class="ace-icon fa fa-home home-icon"></i>
								<a href="#">Home</a>
							</li>
							<li class="active">Table</li>
						</ul><!-- /.breadcrumb -->

						<div class="nav-search" id="nav-search">
							<form class="form-search">
								<span class="input-icon">
									<input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
									<i class="ace-icon fa fa-search nav-search-icon"></i>
								</span>
							</form>
						</div><!-- /.nav-search -->
					</div>

					<div class="page-content">
						<div class="ace-settings-container" id="ace-settings-container">
							<div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
								<i class="ace-icon fa fa-cog bigger-130"></i>
							</div>

							<div class="ace-settings-box clearfix" id="ace-settings-box">
								<div class="pull-left width-50">
									<div class="ace-settings-item">
										<div class="pull-left">
											<select id="skin-colorpicker" class="hide">
												<option data-skin="no-skin" value="#438EB9">#438EB9</option>
												<option data-skin="skin-1" value="#222A2D">#222A2D</option>
												<option data-skin="skin-2" value="#C6487E">#C6487E</option>
												<option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
											</select>
										</div>
										<span>&nbsp; Choose Skin</span>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-navbar" autocomplete="off" />
										<label class="lbl" for="ace-settings-navbar"> Fixed Navbar</label>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-sidebar" autocomplete="off" />
										<label class="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-breadcrumbs" autocomplete="off" />
										<label class="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-rtl" autocomplete="off" />
										<label class="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2 ace-save-state" id="ace-settings-add-container" autocomplete="off" />
										<label class="lbl" for="ace-settings-add-container">
											Inside
											<b>.container</b>
										</label>
									</div>
								</div><!-- /.pull-left -->

								<div class="pull-left width-50">
									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-hover" autocomplete="off" />
										<label class="lbl" for="ace-settings-hover"> Submenu on Hover</label>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-compact" autocomplete="off" />
										<label class="lbl" for="ace-settings-compact"> Compact Sidebar</label>
									</div>

									<div class="ace-settings-item">
										<input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-highlight" autocomplete="off" />
										<label class="lbl" for="ace-settings-highlight"> Alt. Active Item</label>
									</div>
								</div><!-- /.pull-left -->
							</div><!-- /.ace-settings-box -->
						</div><!-- /.ace-settings-container -->

						<div class="page-header">
							<h1>
								Tables
								<small>
									<i class="ace-icon fa fa-angle-double-right"></i>
									View And Request Tables
								</small>
							</h1>
						</div><!-- /.page-header -->

						<div class="row">
								<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->
								
								<div class="row">
									<div class="col-xs-12">
                                        <!--upper-table-->
                                        

                                        
                                        <!--end upper table-->
                                        
                                        <!--featured button here-->
                                       
                                        <!--end featured button here-->
                                        
                                        
                                        
										<div class="table-header">
											Results for "Views"
										</div>

										<!-- div.table-responsive -->

										<!-- div.dataTables_borderWrap -->
										<div>
											<table id="dynamic-table" class="table table-striped table-bordered table-hover">
												<thead>
													<tr>
														<th class="center">
															<label class="pos-rel">
																<span class="ace"><strong>NAME</strong></span>
																<span class="lbl"></span>
															</label>
														</th>
                                                        <!--<th class="detail-col">Details</th>-->
                                                        <!--<th class="hidden-480">Image</th>-->
														<th>Mobile Number</th>
														<th>Email</th>
														<th class="hidden-480">City</th>

														<th>
															
															State
														</th>
														<th class="hidden-480">Zip</th>
                                                        <th>Address</th>
													</tr>
												</thead>

												<tbody>
                                                    
                                                    
													<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                   <!-- <tr class="detail-row">
													<td colspan="8">
														<div class="table-detail">
															<div class="row">
																<div class="col-xs-12 col-sm-2">
																	<div class="text-center">
																		<img height="200" class="thumbnail inline no-margin-bottom" alt="Domain Owner's Avatar" src="assets/images/avatars/profile-pic.jpg" />
																		<br />
																		<div class="width-80 label label-info label-xlg arrowed-in arrowed-in-right">
																			<div class="inline position-relative">
																				<a class="user-title-label" href="#">
																					<i class="ace-icon fa fa-circle light-green"></i>
																					&nbsp;
																					<span class="white">Alex M. Doe</span>
																				</a>
																			</div>
																		</div>
																	</div>
																</div>

																<div class="col-xs-12 col-sm-7">
																	<div class="space visible-xs"></div>

																	<div class="profile-user-info profile-user-info-striped">
																		<div class="profile-info-row">
																			<div class="profile-info-name"> Owner Name </div>

																			<div class="profile-info-value">
																				<span>alexdoe</span>
																			</div>
																		</div>

																		<div class="profile-info-row">
																			<div class="profile-info-name"> Location </div>

																			<div class="profile-info-value">
																				<i class="fa fa-map-marker light-orange bigger-110"></i>
																				<span>Netherlands, Amsterdam</span>
																			</div>
																		</div>

																		<div class="profile-info-row">
																			<div class="profile-info-name"> City </div>

																			<div class="profile-info-value">
																				<span>38</span>
																			</div>
																		</div>

																		<div class="profile-info-row">
																			<div class="profile-info-name"> State </div>

																			<div class="profile-info-value">
																				<span>2010/06/20</span>
																			</div>
																		</div>

																		<div class="profile-info-row">
																			<div class="profile-info-name"> Zip </div>

																			<div class="profile-info-value">
																				<span>3 hours ago</span>
																			</div>
																		</div>

																		<div class="profile-info-row">
																			<div class="profile-info-name"> Mobile </div>

																			<div class="profile-info-value">
																				<span>Bio</span>
																			</div>
																		</div>
																	</div>
																</div>

																<div class="col-xs-12 col-sm-3">
																	<div class="space visible-xs"></div>
																	<h4 class="header blue lighter less-margin">Send a message to Alex</h4>

																	<div class="space-6"></div>

																	<form>
																		<fieldset>
																			<textarea class="width-100" resize="none" placeholder="Type something…"></textarea>
																		</fieldset>

																		<div class="hr hr-dotted"></div>

																		<div class="clearfix">
																			<label class="pull-left">
																				<input type="checkbox" class="ace" />
																				<span class="lbl"> Email me a copy</span>
																			</label>

																			<button class="pull-right btn btn-sm btn-primary btn-white btn-round" type="button">
																				Submit
																				<i class="ace-icon fa fa-arrow-right icon-on-right bigger-110"></i>
																			</button>
																		</div>
																	</form>
<input type="submit" class="btn btn-info btn-view-admin" value="View" style="padding: 5px 25px;">
                                                                    <span class="view-custom-counter" style="float:right;font-size:25px;">255</span>
                                                                    <br><br>
                                                                     <input type="submit" class="btn btn-info btn-view-admin" value="Requests">
                                                                    <span class="view-custom-counter" style="float:right;font-size:25px;">255</span>
																</div>
															</div>
														</div>
													</td>
												</tr>--><!--detail row-->
                                                    
                                               	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
													<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    

													<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                 	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                 	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                  	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                  	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                 	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    
													<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    
                                                    
													<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    

														<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>

                                                	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                   	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>

                                                    
                                                  	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    
                                               	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    
													<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    
                                                   	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>

                                               	<tr>
														<!--<td class="center">
															<label class="pos-rel">
																<input type="checkbox" class="ace" />
																<span class="lbl"></span>
															</label>
														</td>-->
                                                        <td>
															<a href="#" class="text-center center-block">John Doe</a>
														</td>
                                                        <!--<td class="center">
                                                        <div class="action-buttons">
															<a href="#" class="green bigger-140 show-details-btn" title="Show Details">
																<i class="ace-icon fa fa-angle-double-down"></i>
																<span class="sr-only">Details</span>
															</a>
														</div>
                                                        
                                                        </td>-->
                                                      <!--<td><img src="assets/images/avatars/avatar.png" class="img-responsive"></td>-->
														<td>
															8764049752
														</td>
														<td>someone@gmail.com</td>
														<td class="hidden-480">Indore</td>
														<td>Madhya Pradesh</td>

													<td class="hidden-480">
															<span class="">320623</span>
														</td>

														<td>
															208, Malaw Kunj, Navlakha, Indore
														</td>
													</tr>
                                                    
                                                    
                                                    
												</tbody>
											</table>
										</div>
									</div>
								</div>

								
                                    
								<!-- PAGE CONTENT ENDS -->
							</div><!-- /.col -->
						</div><!-- /.row -->
                        
                        <!--SECOND TABLE BEGIN HERE-->
                        
                        
                        <!--END SECOND TABLE HERE-->
                        
                        
					</div><!-- /.page-content -->
				</div>
			</div><!-- /.main-content -->

			<div class="footer">
				<div class="footer-inner">
					<div class="footer-content">
						<span class="bigger-120">
							<span class="blue bolder">Ace</span>
							Application &copy; 2013-2014
						</span>

						&nbsp; &nbsp;
						<span class="action-buttons">
							<a href="#">
								<i class="ace-icon fa fa-twitter-square light-blue bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-facebook-square text-primary bigger-150"></i>
							</a>

							<a href="#">
								<i class="ace-icon fa fa-rss-square orange bigger-150"></i>
							</a>
						</span>
					</div>
				</div>
			</div>
            
            
        
        </div><!--end col 8 here-->
        
        
        
        <!--end main content here-->    
        </div>
    </div>
    
    
    
    
    
    <!-- basic scripts -->

		<!--[if !IE]> -->
		<script src="assets/js/jquery-2.1.4.min.js"></script>

		<!-- <![endif]-->

		<!--[if IE]>
<script src="assets/js/jquery-1.11.3.min.js"></script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
		</script>
		<script src="assets/js/bootstrap.min.js"></script>

		<!-- page specific plugin scripts -->

		<!--[if lte IE 8]>
		  <script src="assets/js/excanvas.min.js"></script>
		<![endif]-->
		<!-- page specific plugin scripts -->
		<script src="assets/js/jquery.dataTables.min.js"></script>
		<script src="assets/js/jquery.dataTables.bootstrap.min.js"></script>
		<script src="assets/js/dataTables.buttons.min.js"></script>
		<script src="assets/js/buttons.flash.min.js"></script>
		<script src="assets/js/buttons.html5.min.js"></script>
		<script src="assets/js/buttons.print.min.js"></script>
		<script src="assets/js/buttons.colVis.min.js"></script>
		<script src="assets/js/dataTables.select.min.js"></script>

		<!-- ace scripts -->
		<script src="assets/js/ace-elements.min.js"></script>
		<script src="assets/js/ace.min.js"></script>

		<!-- inline scripts related to this page -->
		<script type="text/javascript">
			jQuery(function($) {
				//initiate dataTables plugin
				var myTable = 
				$('#dynamic-table')
				//.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
				.DataTable( {
					bAutoWidth: false,
					"aoColumns": [
					  { "bSortable": false },
					  null, null,null, null, null,
					  { "bSortable": false }
					],
					"aaSorting": [],
					
					
					//"bProcessing": true,
			        //"bServerSide": true,
			        //"sAjaxSource": "http://127.0.0.1/table.php"	,
			
					//,
					//"sScrollY": "200px",
					//"bPaginate": false,
			
					//"sScrollX": "100%",
					//"sScrollXInner": "120%",
					//"bScrollCollapse": true,
					//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
					//you may want to wrap the table inside a "div.dataTables_borderWrap" element
			
					//"iDisplayLength": 50
			
			
					select: {
						style: 'multi'
					}
			    } );
			
				
				
				$.fn.dataTable.Buttons.defaults.dom.container.className = 'dt-buttons btn-overlap btn-group btn-overlap';
				
				new $.fn.dataTable.Buttons( myTable, {
					buttons: [
					  {
						"extend": "colvis",
						"text": "<i class='fa fa-search bigger-110 blue'></i> <span class='hidden'>Show/hide columns</span>",
						"className": "btn btn-white btn-primary btn-bold",
						columns: ':not(:first):not(:last)'
					  },
					  {
						"extend": "copy",
						"text": "<i class='fa fa-copy bigger-110 pink'></i> <span class='hidden'>Copy to clipboard</span>",
						"className": "btn btn-white btn-primary btn-bold"
					  },
					  {
						"extend": "csv",
						"text": "<i class='fa fa-database bigger-110 orange'></i> <span class='hidden'>Export to CSV</span>",
						"className": "btn btn-white btn-primary btn-bold"
					  },
					  {
						"extend": "excel",
						"text": "<i class='fa fa-file-excel-o bigger-110 green'></i> <span class='hidden'>Export to Excel</span>",
						"className": "btn btn-white btn-primary btn-bold"
					  },
					  {
						"extend": "pdf",
						"text": "<i class='fa fa-file-pdf-o bigger-110 red'></i> <span class='hidden'>Export to PDF</span>",
						"className": "btn btn-white btn-primary btn-bold"
					  },
					  {
						"extend": "print",
						"text": "<i class='fa fa-print bigger-110 grey'></i> <span class='hidden'>Print</span>",
						"className": "btn btn-white btn-primary btn-bold",
						autoPrint: false,
						message: 'This print was produced using the Print button for DataTables'
					  }		  
					]
				} );
				myTable.buttons().container().appendTo( $('.tableTools-container') );
				
				//style the message box
				var defaultCopyAction = myTable.button(1).action();
				myTable.button(1).action(function (e, dt, button, config) {
					defaultCopyAction(e, dt, button, config);
					$('.dt-button-info').addClass('gritter-item-wrapper gritter-info gritter-center white');
				});
				
				
				var defaultColvisAction = myTable.button(0).action();
				myTable.button(0).action(function (e, dt, button, config) {
					
					defaultColvisAction(e, dt, button, config);
					
					
					if($('.dt-button-collection > .dropdown-menu').length == 0) {
						$('.dt-button-collection')
						.wrapInner('<ul class="dropdown-menu dropdown-light dropdown-caret dropdown-caret" />')
						.find('a').attr('href', '#').wrap("<li />")
					}
					$('.dt-button-collection').appendTo('.tableTools-container .dt-buttons')
				});
			
				////
			
				setTimeout(function() {
					$($('.tableTools-container')).find('a.dt-button').each(function() {
						var div = $(this).find(' > div').first();
						if(div.length == 1) div.tooltip({container: 'body', title: div.parent().text()});
						else $(this).tooltip({container: 'body', title: $(this).text()});
					});
				}, 500);
				
				
				
				
				
				myTable.on( 'select', function ( e, dt, type, index ) {
					if ( type === 'row' ) {
						$( myTable.row( index ).node() ).find('input:checkbox').prop('checked', true);
					}
				} );
				myTable.on( 'deselect', function ( e, dt, type, index ) {
					if ( type === 'row' ) {
						$( myTable.row( index ).node() ).find('input:checkbox').prop('checked', false);
					}
				} );
			
			
			
			
				/////////////////////////////////
				//table checkboxes
				$('th input[type=checkbox], td input[type=checkbox]').prop('checked', false);
				
				//select/deselect all rows according to table header checkbox
				$('#dynamic-table > thead > tr > th input[type=checkbox], #dynamic-table_wrapper input[type=checkbox]').eq(0).on('click', function(){
					var th_checked = this.checked;//checkbox inside "TH" table header
					
					$('#dynamic-table').find('tbody > tr').each(function(){
						var row = this;
						if(th_checked) myTable.row(row).select();
						else  myTable.row(row).deselect();
					});
				});
				
				//select/deselect a row when the checkbox is checked/unchecked
				$('#dynamic-table').on('click', 'td input[type=checkbox]' , function(){
					var row = $(this).closest('tr').get(0);
					if(this.checked) myTable.row(row).deselect();
					else myTable.row(row).select();
				});
			
			
			
				$(document).on('click', '#dynamic-table .dropdown-toggle', function(e) {
					e.stopImmediatePropagation();
					e.stopPropagation();
					e.preventDefault();
				});
				
				
				
				//And for the first simple table, which doesn't have TableTools or dataTables
				//select/deselect all rows according to table header checkbox
				var active_class = 'active';
				$('#simple-table > thead > tr > th input[type=checkbox]').eq(0).on('click', function(){
					var th_checked = this.checked;//checkbox inside "TH" table header
					
					$(this).closest('table').find('tbody > tr').each(function(){
						var row = this;
						if(th_checked) $(row).addClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', true);
						else $(row).removeClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', false);
					});
				});
				
				//select/deselect a row when the checkbox is checked/unchecked
				$('#simple-table').on('click', 'td input[type=checkbox]' , function(){
					var $row = $(this).closest('tr');
					if($row.is('.detail-row ')) return;
					if(this.checked) $row.addClass(active_class);
					else $row.removeClass(active_class);
				});
			
				
			
				/********************************/
				//add tooltip for small view action buttons in dropdown menu
				$('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
				
				//tooltip placement on right or left
				function tooltip_placement(context, source) {
					var $source = $(source);
					var $parent = $source.closest('table')
					var off1 = $parent.offset();
					var w1 = $parent.width();
			
					var off2 = $source.offset();
					//var w2 = $source.width();
			
					if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
					return 'left';
				}
				
				
				
				
				/***************/
				$('.show-details-btn').on('click', function(e) {
					e.preventDefault();
					$(this).closest('tr').next().toggleClass('open');
					$(this).find(ace.vars['.icon']).toggleClass('fa-angle-double-down').toggleClass('fa-angle-double-up');
				});
				/***************/
				
				
				
				
				
				/**
				//add horizontal scrollbars to a simple table
				$('#simple-table').css({'width':'2000px', 'max-width': 'none'}).wrap('<div style="width: 1000px;" />').parent().ace_scroll(
				  {
					horizontal: true,
					styleClass: 'scroll-top scroll-dark scroll-visible',//show the scrollbars on top(default is bottom)
					size: 2000,
					mouseWheelLock: true
				  }
				).css('padding-top', '12px');
				*/
			
			
			})
		</script>
    </body>
</html>
